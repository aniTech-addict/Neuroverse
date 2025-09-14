# Database Schema Details for Supabase Migration

This document outlines the tables, their attributes, data types, descriptions, and possible values for the Supabase database migration.

---

## Table: `units`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the unit. | Auto-generated UUID. |
| `name`         | `VARCHAR(255)` | Unique name of the unit. | e.g., "Alpha Unit", "Bravo Company" |
| `location`     | `VARCHAR(255)` | Geographical location of the unit. | e.g., "Sector 7", "Outpost 12" |
| `strength`     | `INTEGER` | Current number of personnel in the unit. | Numeric value. |
| `required_strength` | `INTEGER` | Required number of personnel for the unit. | Numeric value. |
| `readiness_level` | `INTEGER` | Operational readiness level of the unit. | Numeric value (e.g., 1-5). |
| `critical_shortages` | `TEXT[]` | List of critical shortages (e.g., equipment, personnel). | Array of strings, e.g., `"{""Rifles"",""Medkits""}"` |
| `command_structure` | `JSONB` | Detailed command structure of the unit. | JSON object, e.g., `{ "commandingOfficer": "Col. Sanders", "seniorOfficers": ["Maj. Ketchup"] }` |
| `operational_status` | `VARCHAR(50)` | Current operational status of the unit. | "Active", "Training", "Maintenance", "Standby" |
| `last_inspection` | `DATE` | Date of the last inspection. | `YYYY-MM-DD` format. |
| `budget`       | `JSONB` | Budget details for the unit. | JSON object, e.g., `{ "allocated": 100000, "spent": 75000 }` |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `skills`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the skill. | Auto-generated UUID. |
| `name`         | `VARCHAR(255)` | Unique name of the skill. | e.g., "Marksmanship", "First Aid" |
| `level`        | `VARCHAR(50)` | Proficiency level of the skill. | "Novice", "Intermediate", "Advanced", "Expert" |
| `certification_date` | `DATE` | Date when the skill was certified. | `YYYY-MM-DD` format. |
| `expiry_date`  | `DATE` | Date when the certification expires. | `YYYY-MM-DD` format, can be NULL. |
| `certifying_authority` | `VARCHAR(255)` | Authority that certified the skill. | e.g., "Military Academy", "Red Cross", can be NULL. |
| `practical_score` | `INTEGER` | Score obtained in the practical assessment. | Numeric value, can be NULL. |
| `theoretical_score` | `INTEGER` | Score obtained in the theoretical assessment. | Numeric value, can be NULL. |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `personnel`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the personnel. | Auto-generated UUID. |
| `service_number` | `VARCHAR(255)` | Unique service number of the personnel. | e.g., "SN001", "SN002" |
| `name`         | `VARCHAR(255)` | Full name of the personnel. | e.g., "John Doe", "Jane Smith" |
| `rank`         | `VARCHAR(255)` | Military rank of the personnel. | e.g., "Captain", "Lieutenant" |
| `branch`       | `VARCHAR(255)` | Military branch of the personnel. | e.g., "Air Force", "Army" |
| `unit_id`      | `UUID` | Foreign key referencing the `units` table. | UUID of the associated unit. |
| `specialization` | `TEXT[]` | List of specializations held by the personnel. | Array of strings, e.g., `"{""Pilot"",""Instructor""}"` |
| `experience`   | `INTEGER` | Years of experience. | Numeric value. |
| `medical_status` | `VARCHAR(50)` | Current medical status. | "Fit", "Unfit", "Under Review" |
| `mission_readiness` | `INTEGER` | Mission readiness score. | Numeric value (e.g., 1-100). |
| `last_deployment` | `DATE` | Date of the last deployment. | `YYYY-MM-DD` format. |
| `training_status` | `VARCHAR(50)` | Current training status. | "Current", "Due", "Overdue" |
| `leadership_potential` | `INTEGER` | Leadership potential score. | Numeric value (e.g., 1-10). |
| `attrition_risk` | `VARCHAR(50)` | Risk of attrition. | "Low", "Medium", "High" |
| `performance_rating` | `DECIMAL(3,1)` | Performance rating. | Decimal value (e.g., 4.5). |
| `security_clearance` | `VARCHAR(255)` | Security clearance level. | e.g., "Top Secret", "Secret" |
| `psychological_profile` | `JSONB` | Detailed psychological profile. | JSON object, can be NULL. |
| `family_status` | `JSONB` | Family status details. | JSON object, can be NULL. |
| `fitness_score` | `INTEGER` | Physical fitness score. | Numeric value. |
| `language_proficiency` | `JSONB` | List of languages and proficiency levels. | JSON array of objects, can be NULL. |
| `emergency_contact` | `JSONB` | Emergency contact information. | JSON object, can be NULL. |
| `biometric_data` | `JSONB` | Biometric data identifiers. | JSON object, can be NULL. |
| `ai_recommendations` | `JSONB` | AI-generated recommendations. | JSON array of objects, can be NULL. |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `deployments`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the deployment. | Auto-generated UUID. |
| `personnel_id` | `UUID` | Foreign key referencing the `personnel` table. | UUID of the associated personnel. |
| `location`     | `VARCHAR(255)` | Location of the deployment. | e.g., "Kabul", "Germany" |
| `duration`     | `INTEGER` | Duration of the deployment in days. | Numeric value. |
| `role`         | `VARCHAR(255)` | Role of the personnel during deployment. | e.g., "Squad Leader", "Training Officer" |
| `start_date`   | `DATE` | Start date of the deployment. | `YYYY-MM-DD` format. |
| `end_date`     | `DATE` | End date of the deployment. | `YYYY-MM-DD` format. |
| `performance`  | `DECIMAL(3,1)` | Performance rating during deployment. | Decimal value (e.g., 4.5). |
| `mission_type` | `VARCHAR(50)` | Type of mission. | "Combat", "Training", "Peacekeeping", "Humanitarian", "Border Security", can be NULL. |
| `commendations` | `TEXT[]` | List of commendations received during deployment. | Array of strings, e.g., `"{""Medal of Honor""}"`, can be NULL. |
| `challenges`   | `TEXT[]` | List of challenges faced during deployment. | Array of strings, e.g., `"{""Logistics Issues""}"`, can be NULL. |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `training_records`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the training record. | Auto-generated UUID. |
| `personnel_id` | `UUID` | Foreign key referencing the `personnel` table. | UUID of the associated personnel. |
| `course`       | `VARCHAR(255)` | Name of the training course. | e.g., "Advanced Marksmanship" |
| `completion_date` | `DATE` | Date when the training was completed. | `YYYY-MM-DD` format. |
| `score`        | `INTEGER` | Score obtained in the training. | Numeric value. |
| `instructor`   | `VARCHAR(255)` | Name of the instructor. | e.g., "Sgt. Miller" |
| `status`       | `VARCHAR(50)` | Status of the training. | "Completed", "In Progress", "Scheduled" |
| `training_type` | `VARCHAR(50)` | Type of training. | "Technical", "Leadership", "Combat", "Academic", "Physical", can be NULL. |
| `duration`     | `INTEGER` | Duration of the training in hours/days. | Numeric value, can be NULL. |
| `location`     | `VARCHAR(255)` | Location where the training took place. | e.g., "Firing Range", "Academy", can be NULL. |
| `cost`         | `DECIMAL(10,2)` | Cost of the training. | Decimal value (e.g., 500.00), can be NULL. |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `awards`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the award. | Auto-generated UUID. |
| `personnel_id` | `UUID` | Foreign key referencing the `personnel` table. | UUID of the associated personnel. |
| `name`         | `VARCHAR(255)` | Name of the award. | e.g., "Medal of Valor", "Service Ribbon" |
| `category`     | `VARCHAR(50)` | Category of the award. | "Gallantry", "Service", "Academic", "Sports", "Technical" |
| `date_awarded` | `DATE` | Date when the award was given. | `YYYY-MM-DD` format. |
| `description`  | `TEXT` | Description of the award and reason for receiving it. | Free text. |
| `awarding_authority` | `VARCHAR(255)` | Authority that awarded it. | e.g., "General Command", "Unit Commander" |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `disciplinary_records`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the disciplinary record. | Auto-generated UUID. |
| `personnel_id` | `UUID` | Foreign key referencing the `personnel` table. | UUID of the associated personnel. |
| `type`         | `VARCHAR(50)` | Type of disciplinary action. | "Minor", "Major", "Court Martial" |
| `date`         | `DATE` | Date of the disciplinary incident. | `YYYY-MM-DD` format. |
| `description`  | `TEXT` | Description of the incident. | Free text. |
| `action`       | `TEXT` | Action taken (e.g., "Verbal Warning", "30-day suspension"). | Free text. |
| `status`       | `VARCHAR(50)` | Status of the disciplinary record. | "Active", "Resolved", "Appealed" |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `equipment`

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `id`           | `UUID` | Primary key, unique identifier for the equipment. | Auto-generated UUID. |
| `unit_id`      | `UUID` | Foreign key referencing the `units` table. | UUID of the associated unit. |
| `type`         | `VARCHAR(255)` | Type of equipment. | e.g., "Rifle", "Vehicle" |
| `model`        | `VARCHAR(255)` | Model of the equipment. | e.g., "M4 Carbine", "Humvee" |
| `quantity`     | `INTEGER` | Number of units of this equipment. | Numeric value. |
| `condition`    | `VARCHAR(50)` | Current condition of the equipment. | "Excellent", "Good", "Fair", "Poor" |
| `last_maintenance` | `DATE` | Date of the last maintenance. | `YYYY-MM-DD` format. |
| `operational_status` | `DECIMAL(4,2)` | Operational status as a percentage (0.00-1.00). | Decimal value (e.g., 0.99). |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |

---

## Table: `personnel_skills` (Join Table)

| Attribute Name | Type | Description | Possible Values / Notes |
|----------------|------|-------------|-------------------------|
| `personnel_id` | `UUID` | Foreign key referencing the `personnel` table. | UUID of the associated personnel. |
| `skill_id`     | `UUID` | Foreign key referencing the `skills` table. | UUID of the associated skill. |
| `created_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was created. | Auto-generated. |
| `updated_at`   | `TIMESTAMP WITH TIME ZONE` | Timestamp when the record was last updated. | Auto-generated. |