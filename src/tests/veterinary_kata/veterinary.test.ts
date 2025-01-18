import {Case, Diagnosis, DiseaseFilter} from "../../veterinary_kata/veterinary";

describe('Disease filter', () => {
    let diseaseFilter: DiseaseFilter;

    it('filters cases when several diagnosis filters are applied together', () => {
        let expectedName1 = 'Chupito';
        let expectedName2 = 'Juliana';
        createCase(1, expectedName1);
        createCase(2, expectedName2);
        createCase(3, 'irrelevantName');
        let searchCriterion1 = 'Vías respiratorias altas';
        let searchCriterion2 = 'Cerebro';
        const fixtures = casesWithDiagnoses()
            .havingDiagnosisWithLocationAndCaseWithName(searchCriterion1, expectedName1)
            .havingDiagnosisWithLocationAndCaseWithName(searchCriterion2, expectedName2)
            .havingDiagnosisWithLocationAndCaseWithName('irrelevantLocation', 'irrelevantName')
            .build()
        createDiagnosis(1, searchCriterion1);
        createDiagnosis(2, searchCriterion2);
        createDiagnosis(3, 'Oídos');
        diseaseFilter = DiseaseFilter.create(fixtures.cases, fixtures.diagnoses);
        diseaseFilter.addFilter(searchCriterion2);
        diseaseFilter.addFilter(searchCriterion1);

        const result = diseaseFilter.casesFiltered;

        expect(result.length).toBe(2);
        expect(result[1].patientName).toBe(expectedName1);
        expect(result[0].patientName).toBe(expectedName2);
    });
});

function casesWithDiagnoses() {
    let diagnosesId = 0;
    let diagnoses: Diagnosis[] = [];
    let cases: Case[] = [];

    const add = (location: string, patientName: string) => {
        diagnosesId++;
        diagnoses.push(createDiagnosis(diagnosesId, location));
        cases.push(createCase(diagnosesId, patientName));
    }

    const builder = {
        havingDiagnosisWithLocationAndCaseWithName: (location: string, patientName: string) => {
            add(location, patientName);
            return builder;
        },

        build: () => ({
            cases: cases,
            diagnoses: diagnoses,
        })
    }

    return builder;
}

function createDiagnosis(id: number, location: string) {
    return {
        id: id,
        location: location,
        name: 'irrelevantName',
        system: 'irrelevantSystem',
        origin: 'irrelevantOrigin',
        specie: 'irrelevantSpecies',
    };
}

function createCase(diagnosisId: number, patientName: string) {
    return {
        id: 0,
        patientName: patientName,
        diagnosisId: diagnosisId,
        diagnosisName: 'irrelevantDiagnosisName',
        publicNotes: [],
        privateNotes: [],
    };
}
