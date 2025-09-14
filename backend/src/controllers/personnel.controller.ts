import { Request, Response } from 'express';
import { AppDataSource } from '../index';
import { Personnel } from '../entities/Personnel';
import { Unit } from '../entities/Unit';

export const getPersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.find({
      relations: ['unit', 'skills', 'deployments', 'trainingRecords', 'awards', 'disciplinaryRecords'],
    });
    res.json(personnel);
  } catch (error) {
    console.error("Error fetching personnel:", error);
    res.status(500).json({ message: "Error fetching personnel" });
  }
};

export const getPersonnelById = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.findOne({
      where: { id: req.params.id },
      relations: ['unit', 'skills', 'deployments', 'trainingRecords', 'awards', 'disciplinaryRecords'],
    });
    if (personnel) {
      res.json(personnel);
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error fetching personnel by ID:", error);
    res.status(500).json({ message: "Error fetching personnel by ID" });
  }
};

export const createPersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const newPersonnel = personnelRepository.create(req.body);
    await personnelRepository.save(newPersonnel);
    res.status(201).json(newPersonnel);
  } catch (error) {
    console.error("Error creating personnel:", error);
    res.status(500).json({ message: "Error creating personnel" });
  }
};

export const updatePersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.findOneBy({ id: req.params.id });
    if (personnel) {
      personnelRepository.merge(personnel, req.body);
      const result = await personnelRepository.save(personnel);
      res.json(result);
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error updating personnel:", error);
    res.status(500).json({ message: "Error updating personnel" });
  }
};

export const deletePersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const result = await personnelRepository.delete(req.params.id);
    if (result.affected === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error deleting personnel:", error);
    res.status(500).json({ message: "Error deleting personnel" });
  }
};

// AI Query Handler for Flexible Natural Language Queries
export const aiQuery = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: "Invalid request",
        message: "Please provide a 'query' field with your natural language question"
      });
    }

    const personnelRepository = AppDataSource.getRepository(Personnel);
    const unitRepository = AppDataSource.getRepository(Unit);

    // Get all personnel and units data for analysis
    const personnel = await personnelRepository.find({
      relations: ['unit', 'skills', 'deployments', 'trainingRecords', 'awards', 'disciplinaryRecords'],
    });

    const units = await unitRepository.find({
      relations: ['equipment'],
    });

    // Process the query and generate response
    const response = await processAIQuery(query, personnel, units);

    res.json({
      query: query,
      response: response,
      timestamp: new Date().toISOString(),
      dataSource: {
        personnelCount: personnel.length,
        unitsCount: units.length
      }
    });

  } catch (error) {
    console.error("Error processing AI query:", error);
    res.status(500).json({
      error: "Query processing failed",
      message: "An error occurred while processing your query. Please try again."
    });
  }
};

// AI Query Processing Function
async function processAIQuery(query: string, personnel: any[], units: any[]) {
  const lowerQuery = query.toLowerCase();

  // System Context for AI Processing
  const systemContext = `
You are an advanced AI assistant specialized in Indian Air Force personnel and unit management. You have access to comprehensive datasets containing detailed information about military personnel and units.

## 📊 **Available Data Structure**

### Personnel Information:
- **Basic Details**: Name, rank, service number, branch, unit, specialization
- **Professional Data**: Experience, mission readiness, training status, performance rating
- **Skills & Certifications**: Technical skills with levels (Novice/Intermediate/Advanced/Expert), certification dates, practical/theoretical scores
- **Deployment History**: Locations, durations, roles, performance, mission types, commendations, challenges
- **Training Records**: Courses completed, scores, instructors, training types, costs
- **Psychological Profiles**: Stress resilience, teamwork, decision-making, adaptability, leadership scores, recommendations
- **Family Status**: Marital status, dependents, spouse occupation, children ages, family location
- **Awards & Discipline**: Gallantry/service awards, disciplinary records with types and actions
- **Security & Medical**: Security clearance levels, medical status, fitness scores
- **Languages & Contacts**: Language proficiency levels, emergency contact details
- **Biometric Data**: Fingerprint, retinal scan, face recognition IDs
- **AI Recommendations**: Career advancement, training, deployment suggestions with confidence levels

### Unit Information:
- **Basic Details**: Name, location, strength vs required strength, readiness level
- **Command Structure**: Commanding officers, deputies, senior officers, reporting hierarchies
- **Equipment**: Aircraft/helicopter/radar types, models, quantities, conditions, maintenance schedules
- **Operational Status**: Active/Training/Maintenance/Standby status, last inspections
- **Budget Information**: Allocated/spent/remaining amounts, category breakdowns
- **Critical Shortages**: Personnel skill gaps, equipment needs

## 🎯 **Query Handling Guidelines**

### Response Format:
1. **Direct Answers**: Provide specific, accurate information from the dataset
2. **Analytical Responses**: Include reasoning and supporting evidence
3. **Comparative Responses**: Use structured comparisons when helpful
4. **Recommendations**: Include confidence scores and rationale
5. **Multi-Result Responses**: Summarize and categorize when multiple matches exist

### Query Processing:
- Extract key terms and intent from natural language
- Map to available data fields and relationships
- Apply appropriate filters and sorting
- Provide contextual explanations
- Suggest follow-up queries when relevant

### Edge Cases:
- Handle ambiguous queries by providing multiple interpretations
- Clearly state data limitations or unavailability
- Offer clarification requests for unclear queries
- Provide alternative search suggestions
`;

  // Basic query processing logic (this would be enhanced with actual AI/ML processing)
  let response = {
    type: "query_response",
    summary: "",
    results: [] as any[],
    insights: [] as string[],
    recommendations: [] as any[],
    followUpSuggestions: [] as string[]
  };

  // Personnel-related queries
  if (lowerQuery.includes('personnel') || lowerQuery.includes('person') || lowerQuery.includes('officer') || lowerQuery.includes('personnel')) {
    if (lowerQuery.includes('fighter') || lowerQuery.includes('combat')) {
      const fighterPersonnel = personnel.filter(p => p.branch === 'Fighter');
      response.summary = `Found ${fighterPersonnel.length} personnel in Fighter branch`;
      response.results = fighterPersonnel.map(p => ({
        name: p.name,
        rank: p.rank,
        specialization: p.specialization,
        missionReadiness: p.missionReadiness,
        performanceRating: p.performanceRating
      }));
    } else if (lowerQuery.includes('high') && lowerQuery.includes('performance')) {
      const highPerformers = personnel.filter(p => p.performanceRating >= 4.5);
      response.summary = `Found ${highPerformers.length} high-performing personnel (rating ≥4.5)`;
      response.results = highPerformers.map(p => ({
        name: p.name,
        rank: p.rank,
        performanceRating: p.performanceRating,
        branch: p.branch
      }));
    } else if (lowerQuery.includes('top secret') || lowerQuery.includes('clearance')) {
      const topSecretPersonnel = personnel.filter(p => p.securityClearance === 'Top Secret');
      response.summary = `Found ${topSecretPersonnel.length} personnel with Top Secret clearance`;
      response.results = topSecretPersonnel.map(p => ({
        name: p.name,
        rank: p.rank,
        branch: p.branch,
        unit: p.unit
      }));
    } else {
      response.summary = `Found ${personnel.length} total personnel in the system`;
      response.results = personnel.slice(0, 5).map(p => ({
        name: p.name,
        rank: p.rank,
        branch: p.branch,
        unit: p.unit
      }));
      response.followUpSuggestions = [
        "Try: 'Show me fighter pilots'",
        "Try: 'Find high-performing personnel'",
        "Try: 'List personnel with Top Secret clearance'"
      ];
    }
  }

  // Unit-related queries
  else if (lowerQuery.includes('unit') || lowerQuery.includes('squadron') || lowerQuery.includes('brd')) {
    if (lowerQuery.includes('active') || lowerQuery.includes('status')) {
      const activeUnits = units.filter(u => u.operationalStatus === 'Active');
      response.summary = `Found ${activeUnits.length} active units`;
      response.results = activeUnits.map(u => ({
        name: u.name,
        location: u.location,
        readinessLevel: u.readinessLevel,
        strength: u.strength
      }));
    } else if (lowerQuery.includes('shortage') || lowerQuery.includes('critical')) {
      const unitsWithShortages = units.filter(u => u.criticalShortages && u.criticalShortages.length > 0);
      response.summary = `Found ${unitsWithShortages.length} units with critical shortages`;
      response.results = unitsWithShortages.map(u => ({
        name: u.name,
        criticalShortages: u.criticalShortages,
        readinessLevel: u.readinessLevel
      }));
    } else {
      response.summary = `Found ${units.length} total units in the system`;
      response.results = units.map(u => ({
        name: u.name,
        location: u.location,
        readinessLevel: u.readinessLevel,
        operationalStatus: u.operationalStatus
      }));
    }
  }

  // Skills and expertise queries
  else if (lowerQuery.includes('skill') || lowerQuery.includes('expert') || lowerQuery.includes('specialization')) {
    if (lowerQuery.includes('electronic warfare') || lowerQuery.includes('ew')) {
      const ewExperts = personnel.filter(p =>
        p.skills && p.skills.some((s: any) => s.name.toLowerCase().includes('electronic warfare'))
      );
      response.summary = `Found ${ewExperts.length} personnel with Electronic Warfare expertise`;
      response.results = ewExperts.map(p => ({
        name: p.name,
        rank: p.rank,
        skills: p.skills.filter((s: any) => s.name.toLowerCase().includes('electronic warfare'))
      }));
    } else {
      const skillSummary = personnel.reduce((acc, p) => {
        if (p.skills) {
          p.skills.forEach((skill: any) => {
            acc[skill.name] = (acc[skill.name] || 0) + 1;
          });
        }
        return acc;
      }, {} as Record<string, number>);

      response.summary = "Skills distribution across personnel";
      response.results = Object.entries(skillSummary)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([skill, count]) => ({ skill, count }));
    }
  }

  // Deployment and experience queries
  else if (lowerQuery.includes('deployment') || lowerQuery.includes('experience') || lowerQuery.includes('combat')) {
    if (lowerQuery.includes('ladakh') || lowerQuery.includes('border')) {
      const ladakhDeployments = personnel.filter(p =>
        p.deployments && p.deployments.some((d: any) => d.location.toLowerCase().includes('ladakh'))
      );
      response.summary = `Found ${ladakhDeployments.length} personnel with Ladakh deployment experience`;
      response.results = ladakhDeployments.map(p => ({
        name: p.name,
        rank: p.rank,
        deployments: p.deployments.filter((d: any) => d.location.toLowerCase().includes('ladakh'))
      }));
    } else {
      const deploymentStats = {
        totalPersonnel: personnel.length,
        personnelWithDeployments: personnel.filter(p => p.deployments && p.deployments.length > 0).length,
        averageExperience: personnel.reduce((sum, p) => sum + (p.experience || 0), 0) / personnel.length
      };
      response.summary = "Deployment and experience overview";
      response.results = [deploymentStats];
    }
  }

  // Default response for unrecognized queries
  else {
    response.summary = "Query processed - please try a more specific question";
    response.followUpSuggestions = [
      "Try: 'Show me fighter pilots'",
      "Try: 'Find personnel with high performance ratings'",
      "Try: 'List active units'",
      "Try: 'Who has Electronic Warfare expertise?'",
      "Try: 'Show personnel deployed in Ladakh'"
    ];
  }

  // Add insights based on the query
  if (response.results.length > 0) {
    response.insights = [
      `Query processed successfully with ${response.results.length} results`,
      "Data is current as of the latest system update",
      "Results are filtered based on available personnel and unit information"
    ];
  }

  return response;
}
