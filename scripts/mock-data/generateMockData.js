"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var uuid_1 = require("uuid");
var sync_1 = require("csv-stringify/sync");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
// Helper to format dates as YYYY-MM-DD
var formatDate = function (date) { return date.toISOString().split('T')[0]; };
// Helper to format arrays for PostgreSQL TEXT[]
var formatPgArray = function (arr) {
    if (!arr || arr.length === 0) {
        return '{}';
    }
    return "{".concat(arr.map(function (item) { return "\"".concat(item.replace(/"/g, '""'), "\""); }).join(','), "}");
};
// Helper to format JSONB for PostgreSQL
var formatJsonb = function (obj) {
    if (!obj) {
        return ''; // Represent NULL for nullable JSONB fields
    }
    return JSON.stringify(obj);
};
var generateMockData = function (numPersonnel) {
    var units = [];
    var skills = [];
    var personnel = [];
    var deployments = [];
    var trainingRecords = [];
    var awards = [];
    var disciplinaryRecords = [];
    var equipment = [];
    var personnelSkills = [];
    // Generate Units
    var numUnits = Math.ceil(numPersonnel / 100); // Roughly 1 unit per 100 personnel
    for (var i = 0; i < numUnits; i++) {
        var unitId = (0, uuid_1.v4)();
        var strength = faker_1.faker.number.int({ min: 50, max: 200 });
        units.push({
            id: unitId,
            name: faker_1.faker.company.name() + ' Unit ' + (i + 1),
            location: faker_1.faker.location.city(),
            strength: strength,
            required_strength: strength + faker_1.faker.number.int({ min: -20, max: 50 }),
            readiness_level: faker_1.faker.number.int({ min: 1, max: 5 }),
            critical_shortages: faker_1.faker.helpers.arrayElements(['Rifles', 'Medkits', 'Vehicles', 'Ammunition', 'Radios'], faker_1.faker.number.int({ min: 0, max: 3 })),
            command_structure: {
                commandingOfficer: faker_1.faker.person.fullName(),
                deputyCommander: faker_1.faker.helpers.arrayElement([faker_1.faker.person.fullName(), undefined]),
                seniorOfficers: faker_1.faker.helpers.arrayElements([faker_1.faker.person.fullName(), faker_1.faker.person.fullName(), faker_1.faker.person.fullName()], faker_1.faker.number.int({ min: 1, max: 3 })),
                reportingStructure: [
                    { level: 1, positions: ['Commander'], personnelCount: 1 },
                    { level: 2, positions: ['Platoon Leader'], personnelCount: faker_1.faker.number.int({ min: 2, max: 5 }) },
                ],
            },
            operational_status: faker_1.faker.helpers.arrayElement(['Active', 'Training', 'Maintenance', 'Standby']),
            last_inspection: formatDate(faker_1.faker.date.past({ years: 1 })),
            budget: {
                allocated: faker_1.faker.number.int({ min: 100000, max: 1000000 }),
                spent: faker_1.faker.number.int({ min: 50000, max: 900000 }),
                remaining: 0, // Will be calculated later
                categories: [
                    { name: 'Supplies', allocated: faker_1.faker.number.int({ min: 20000, max: 100000 }), spent: faker_1.faker.number.int({ min: 10000, max: 90000 }) },
                    { name: 'Personnel', allocated: faker_1.faker.number.int({ min: 50000, max: 500000 }), spent: faker_1.faker.number.int({ min: 30000, max: 450000 }) },
                ],
            },
        });
        units[i].budget.remaining = units[i].budget.allocated - units[i].budget.spent;
    }
    // Generate Skills
    var skillNames = ['Marksmanship', 'First Aid', 'Cyber Security', 'Logistics', 'Combat Engineering', 'Piloting', 'Navigation', 'Communications', 'Leadership', 'Tactical Planning'];
    skillNames.forEach(function (skillName) {
        skills.push({
            id: (0, uuid_1.v4)(),
            name: skillName,
            level: faker_1.faker.helpers.arrayElement(['Novice', 'Intermediate', 'Advanced', 'Expert']),
            certification_date: formatDate(faker_1.faker.date.past({ years: 3 })),
            expiry_date: faker_1.faker.helpers.arrayElement([formatDate(faker_1.faker.date.future({ years: 2 })), undefined]),
            certifying_authority: faker_1.faker.helpers.arrayElement(['Military Academy', 'Red Cross', 'Tech Institute', 'Internal Training']),
            practical_score: faker_1.faker.helpers.arrayElement([faker_1.faker.number.int({ min: 60, max: 100 }), undefined]),
            theoretical_score: faker_1.faker.helpers.arrayElement([faker_1.faker.number.int({ min: 60, max: 100 }), undefined]),
        });
    });
    // Generate Personnel
    var ranks = ['Private', 'Corporal', 'Sergeant', 'Lieutenant', 'Captain', 'Major', 'Colonel'];
    var branches = ['Air Force', 'Army', 'Navy', 'Marines'];
    var medicalStatuses = ['Fit', 'Unfit', 'Under Review'];
    var trainingStatuses = ['Current', 'Due', 'Overdue'];
    var attritionRisks = ['Low', 'Medium', 'High'];
    var securityClearances = ['Confidential', 'Secret', 'Top Secret'];
    var _loop_1 = function (i) {
        var personnelId = (0, uuid_1.v4)();
        var unit = faker_1.faker.helpers.arrayElement(units);
        var lastDeploymentDate = faker_1.faker.date.past({ years: 5 });
        personnel.push({
            id: personnelId,
            service_number: "SN".concat(faker_1.faker.string.numeric(5)),
            name: faker_1.faker.person.fullName(),
            rank: faker_1.faker.helpers.arrayElement(ranks),
            branch: faker_1.faker.helpers.arrayElement(branches),
            unit_id: unit.id,
            specialization: faker_1.faker.helpers.arrayElements(['Pilot', 'Medic', 'Engineer', 'Infantry', 'Cyber Ops'], faker_1.faker.number.int({ min: 1, max: 3 })),
            experience: faker_1.faker.number.int({ min: 1, max: 20 }),
            medical_status: faker_1.faker.helpers.arrayElement(medicalStatuses),
            mission_readiness: faker_1.faker.number.int({ min: 50, max: 100 }),
            last_deployment: formatDate(lastDeploymentDate),
            training_status: faker_1.faker.helpers.arrayElement(trainingStatuses),
            leadership_potential: faker_1.faker.number.int({ min: 1, max: 10 }),
            attrition_risk: faker_1.faker.helpers.arrayElement(attritionRisks),
            performance_rating: faker_1.faker.number.float({ min: 2.0, max: 5.0, fractionDigits: 1 }),
            security_clearance: faker_1.faker.helpers.arrayElement(securityClearances),
            psychological_profile: faker_1.faker.helpers.arrayElement([
                {
                    stressResilience: faker_1.faker.number.int({ min: 50, max: 100 }),
                    teamwork: faker_1.faker.number.int({ min: 50, max: 100 }),
                    decisionMaking: faker_1.faker.number.int({ min: 50, max: 100 }),
                    adaptability: faker_1.faker.number.int({ min: 50, max: 100 }),
                    leadership: faker_1.faker.number.int({ min: 50, max: 100 }),
                    lastAssessment: formatDate(faker_1.faker.date.past({ years: 1 })),
                    assessor: faker_1.faker.person.fullName(),
                    recommendations: faker_1.faker.helpers.arrayElements(['Stress management training', 'Leadership development', 'Team building exercises'], faker_1.faker.number.int({ min: 0, max: 2 })),
                },
                undefined,
            ]),
            family_status: faker_1.faker.helpers.arrayElement([
                {
                    maritalStatus: faker_1.faker.helpers.arrayElement(['Single', 'Married', 'Divorced', 'Widowed']),
                    dependents: faker_1.faker.number.int({ min: 0, max: 4 }),
                    spouseOccupation: faker_1.faker.helpers.arrayElement([faker_1.faker.person.jobTitle(), undefined]),
                    childrenAges: faker_1.faker.helpers.arrayElements([1, 5, 10, 15], faker_1.faker.number.int({ min: 0, max: 3 })),
                    familyLocation: faker_1.faker.location.city(),
                    emergencySupport: faker_1.faker.datatype.boolean(),
                },
                undefined,
            ]),
            fitness_score: faker_1.faker.number.int({ min: 60, max: 100 }),
            language_proficiency: faker_1.faker.helpers.arrayElement([
                faker_1.faker.helpers.arrayElements([
                    { language: 'English', proficiency: 'Native' },
                    { language: 'Spanish', proficiency: faker_1.faker.helpers.arrayElement(['Basic', 'Intermediate', 'Advanced']) },
                    { language: 'French', proficiency: faker_1.faker.helpers.arrayElement(['Basic', 'Intermediate']) },
                ], faker_1.faker.number.int({ min: 1, max: 3 })),
                undefined,
            ]),
            emergency_contact: faker_1.faker.helpers.arrayElement([
                {
                    name: faker_1.faker.person.fullName(),
                    relationship: faker_1.faker.helpers.arrayElement(['Spouse', 'Parent', 'Sibling', 'Friend']),
                    phone: faker_1.faker.phone.number(),
                    address: faker_1.faker.location.streetAddress(true),
                },
                undefined,
            ]),
            biometric_data: faker_1.faker.helpers.arrayElement([
                {
                    fingerprintId: (0, uuid_1.v4)(),
                    retinalScanId: (0, uuid_1.v4)(),
                    faceRecognitionId: (0, uuid_1.v4)(),
                    lastUpdated: formatDate(faker_1.faker.date.recent({ days: 365 })),
                },
                undefined,
            ]),
            ai_recommendations: faker_1.faker.helpers.arrayElement([
                faker_1.faker.helpers.arrayElements([
                    {
                        type: faker_1.faker.helpers.arrayElement(['Career', 'Training', 'Deployment', 'Health', 'Performance']),
                        priority: faker_1.faker.helpers.arrayElement(['Low', 'Medium', 'High', 'Critical']),
                        recommendation: faker_1.faker.lorem.sentence(),
                        confidence: faker_1.faker.number.float({ min: 0.5, max: 1.0, fractionDigits: 2 }),
                        reasoning: faker_1.faker.lorem.paragraph(),
                        dateGenerated: formatDate(faker_1.faker.date.recent({ days: 90 })),
                        status: faker_1.faker.helpers.arrayElement(['New', 'Reviewed', 'Implemented', 'Dismissed']),
                    },
                ], faker_1.faker.number.int({ min: 0, max: 2 })),
                undefined,
            ]),
        });
        // Generate Deployments for Personnel
        var numDeployments = faker_1.faker.number.int({ min: 0, max: 3 });
        for (var j = 0; j < numDeployments; j++) {
            var startDate = faker_1.faker.date.past({ years: 5, refDate: lastDeploymentDate });
            var endDate = faker_1.faker.date.soon({ days: 180, refDate: startDate });
            deployments.push({
                id: (0, uuid_1.v4)(),
                personnel_id: personnelId,
                location: faker_1.faker.location.city(),
                duration: faker_1.faker.number.int({ min: 30, max: 365 }),
                role: faker_1.faker.helpers.arrayElement(['Infantry', 'Support', 'Medical', 'Logistics']),
                start_date: formatDate(startDate),
                end_date: formatDate(endDate),
                performance: faker_1.faker.number.float({ min: 2.0, max: 5.0, fractionDigits: 1 }),
                mission_type: faker_1.faker.helpers.arrayElement(['Combat', 'Training', 'Peacekeeping', 'Humanitarian', 'Border Security', undefined]),
                commendations: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElements(['Medal of Honor', 'Bravery Citation'], faker_1.faker.number.int({ min: 0, max: 2 })), undefined]),
                challenges: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElements(['Logistics Issues', 'Harsh Weather'], faker_1.faker.number.int({ min: 0, max: 2 })), undefined]),
            });
        }
        // Generate Training Records for Personnel
        var numTrainingRecords = faker_1.faker.number.int({ min: 0, max: 4 });
        for (var j = 0; j < numTrainingRecords; j++) {
            var completionDate = faker_1.faker.date.past({ years: 3 });
            trainingRecords.push({
                id: (0, uuid_1.v4)(),
                personnel_id: personnelId,
                course: faker_1.faker.helpers.arrayElement(['Advanced Marksmanship', 'Leadership Fundamentals', 'First Aid Refresher', 'Cyber Warfare Basics', 'Vehicle Maintenance']),
                completion_date: formatDate(completionDate),
                score: faker_1.faker.number.int({ min: 70, max: 100 }),
                instructor: faker_1.faker.person.fullName(),
                status: faker_1.faker.helpers.arrayElement(['Completed', 'In Progress', 'Scheduled']),
                training_type: faker_1.faker.helpers.arrayElement(['Technical', 'Leadership', 'Combat', 'Academic', 'Physical', undefined]),
                duration: faker_1.faker.helpers.arrayElement([faker_1.faker.number.int({ min: 8, max: 160 }), undefined]),
                location: faker_1.faker.helpers.arrayElement([faker_1.faker.location.city(), undefined]),
                cost: faker_1.faker.helpers.arrayElement([faker_1.faker.number.float({ min: 100, max: 5000, fractionDigits: 2 }), undefined]),
            });
        }
        // Generate Awards for Personnel
        var numAwards = faker_1.faker.number.int({ min: 0, max: 2 });
        for (var j = 0; j < numAwards; j++) {
            awards.push({
                id: (0, uuid_1.v4)(),
                personnel_id: personnelId,
                name: faker_1.faker.helpers.arrayElement(['Medal of Valor', 'Service Ribbon', 'Commendation Medal', 'Good Conduct Medal']),
                category: faker_1.faker.helpers.arrayElement(['Gallantry', 'Service', 'Academic', 'Sports', 'Technical']),
                date_awarded: formatDate(faker_1.faker.date.past({ years: 10 })),
                description: faker_1.faker.lorem.sentence(),
                awarding_authority: faker_1.faker.helpers.arrayElement(['General Command', 'Unit Commander', 'President']),
            });
        }
        // Generate Disciplinary Records for Personnel
        var numDisciplinaryRecords = faker_1.faker.number.int({ min: 0, max: 1 });
        if (numDisciplinaryRecords > 0) {
            disciplinaryRecords.push({
                id: (0, uuid_1.v4)(),
                personnel_id: personnelId,
                type: faker_1.faker.helpers.arrayElement(['Minor', 'Major', 'Court Martial']),
                date: formatDate(faker_1.faker.date.past({ years: 2 })),
                description: faker_1.faker.lorem.sentence(),
                action: faker_1.faker.helpers.arrayElement(['Verbal Warning', 'Written Reprimand', '30-day suspension', 'Demotion']),
                status: faker_1.faker.helpers.arrayElement(['Active', 'Resolved', 'Appealed']),
            });
        }
        // Link Personnel to Skills (Many-to-Many)
        var numPersonnelSkills = faker_1.faker.number.int({ min: 1, max: 5 });
        faker_1.faker.helpers.arrayElements(skills, numPersonnelSkills).forEach(function (skill) {
            personnelSkills.push({
                personnel_id: personnelId,
                skill_id: skill.id,
            });
        });
    };
    for (var i = 0; i < numPersonnel; i++) {
        _loop_1(i);
    }
    // Generate Equipment for Units
    units.forEach(function (unit) {
        var numEquipment = faker_1.faker.number.int({ min: 5, max: 20 });
        for (var i = 0; i < numEquipment; i++) {
            equipment.push({
                id: (0, uuid_1.v4)(),
                unit_id: unit.id,
                type: faker_1.faker.helpers.arrayElement(['Rifle', 'Vehicle', 'Radio', 'Drone', 'Medical Kit']),
                model: faker_1.faker.commerce.productName(),
                quantity: faker_1.faker.number.int({ min: 1, max: 50 }),
                condition: faker_1.faker.helpers.arrayElement(['Excellent', 'Good', 'Fair', 'Poor']),
                last_maintenance: formatDate(faker_1.faker.date.past({ years: 1 })),
                operational_status: faker_1.faker.number.float({ min: 0.5, max: 1.0, fractionDigits: 2 }),
            });
        }
    });
    return {
        units: units,
        skills: skills,
        personnel: personnel,
        deployments: deployments,
        trainingRecords: trainingRecords,
        awards: awards,
        disciplinaryRecords: disciplinaryRecords,
        equipment: equipment,
        personnelSkills: personnelSkills,
    };
};
var writeCsv = function (filename, data, columns) {
    var csv = (0, sync_1.stringify)(data, { header: true, columns: columns });
    fs.writeFileSync(path.join(__dirname, 'csv', filename), csv);
    console.log("Generated ".concat(filename));
};
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var numPersonnel, mockData, csvDir;
    return __generator(this, function (_a) {
        numPersonnel = 1000;
        mockData = generateMockData(numPersonnel);
        csvDir = path.join(__dirname, 'csv');
        if (!fs.existsSync(csvDir)) {
            fs.mkdirSync(csvDir);
        }
        // Write Units
        writeCsv('units.csv', mockData.units.map(function (u) { return (__assign(__assign({}, u), { critical_shortages: formatPgArray(u.critical_shortages), command_structure: formatJsonb(u.command_structure), budget: formatJsonb(u.budget) })); }), [
            'id', 'name', 'location', 'strength', 'required_strength', 'readiness_level',
            'critical_shortages', 'command_structure', 'operational_status', 'last_inspection', 'budget'
        ]);
        // Write Skills
        writeCsv('skills.csv', mockData.skills.map(function (s) { return (__assign(__assign({}, s), { expiry_date: s.expiry_date || '', certifying_authority: s.certifying_authority || '', practical_score: s.practical_score !== undefined ? s.practical_score : '', theoretical_score: s.theoretical_score !== undefined ? s.theoretical_score : '' })); }), [
            'id', 'name', 'level', 'certification_date', 'expiry_date', 'certifying_authority',
            'practical_score', 'theoretical_score'
        ]);
        // Write Personnel
        writeCsv('personnel.csv', mockData.personnel.map(function (p) { return (__assign(__assign({}, p), { specialization: formatPgArray(p.specialization), psychological_profile: formatJsonb(p.psychological_profile), family_status: formatJsonb(p.family_status), language_proficiency: formatJsonb(p.language_proficiency), emergency_contact: formatJsonb(p.emergency_contact), biometric_data: formatJsonb(p.biometric_data), ai_recommendations: formatJsonb(p.ai_recommendations) })); }), [
            'id', 'service_number', 'name', 'rank', 'branch', 'unit_id', 'specialization',
            'experience', 'medical_status', 'mission_readiness', 'last_deployment',
            'training_status', 'leadership_potential', 'attrition_risk', 'performance_rating',
            'security_clearance', 'psychological_profile', 'family_status', 'fitness_score',
            'language_proficiency', 'emergency_contact', 'biometric_data', 'ai_recommendations'
        ]);
        // Write Deployments
        writeCsv('deployments.csv', mockData.deployments.map(function (d) { return (__assign(__assign({}, d), { mission_type: d.mission_type || '', commendations: formatPgArray(d.commendations || []), challenges: formatPgArray(d.challenges || []) })); }), [
            'id', 'personnel_id', 'location', 'duration', 'role', 'start_date', 'end_date',
            'performance', 'mission_type', 'commendations', 'challenges'
        ]);
        // Write Training Records
        writeCsv('training_records.csv', mockData.trainingRecords.map(function (tr) { return (__assign(__assign({}, tr), { training_type: tr.training_type || '', duration: tr.duration !== undefined ? tr.duration : '', location: tr.location || '', cost: tr.cost !== undefined ? tr.cost : '' })); }), [
            'id', 'personnel_id', 'course', 'completion_date', 'score', 'instructor',
            'status', 'training_type', 'duration', 'location', 'cost'
        ]);
        // Write Awards
        writeCsv('awards.csv', mockData.awards, [
            'id', 'personnel_id', 'name', 'category', 'date_awarded', 'description', 'awarding_authority'
        ]);
        // Write Disciplinary Records
        writeCsv('disciplinary_records.csv', mockData.disciplinaryRecords, [
            'id', 'personnel_id', 'type', 'date', 'description', 'action', 'status'
        ]);
        // Write Equipment
        writeCsv('equipment.csv', mockData.equipment, [
            'id', 'unit_id', 'type', 'model', 'quantity', 'condition', 'last_maintenance', 'operational_status'
        ]);
        // Write Personnel Skills (Join Table)
        writeCsv('personnel_skills.csv', mockData.personnelSkills, [
            'personnel_id', 'skill_id'
        ]);
        console.log('Mock data generation complete!');
        return [2 /*return*/];
    });
}); };
run();
