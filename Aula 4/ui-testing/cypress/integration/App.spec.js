import appSkillActions from "../components/appSkill-actions";
import appSkillList from "../features/appSkillList-feature/appSkill-feature";

describe('App Developers Skills', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
        
    });

    it('You must fill the form with your skill', () => {
        appSkillActions.writeSkillName("Rogerinho");
        appSkillActions.writeSkillDevelopers("Automatizador");
        appSkillActions.writeSkillTecnologic("Cypress");
        appSkillActions.writeSkillRoles("QA");
        appSkillActions.clickButtonAddSkill();

    });

    it('check list skill', () => {
        appSkillList.checkTitle("front-end");
        appSkillList.checkSkillName("Skill Name: front-end");
        appSkillList.checkDevelopers("dev name 1");
        appSkillList.checkDevelopers("dev name 2");
        appSkillList.checkTechnologies("React");
        appSkillList.checkTechnologies("Angular");
    });
});