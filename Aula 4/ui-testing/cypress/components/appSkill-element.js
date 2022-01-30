class appSkillElement{

    selectFieldSkillName(){
        return cy.get('#skill');
    }

    selectFieldSkillDevelopers(){
        return cy.get('#developers');
    }

    selectFieldSkillTecnologic(){
        return cy.get('#technologies');
    }

    selectFieldSkillRoles(){
        return cy.get('#roles')
    }

    getButtonAddSkill(){
        return cy.get('.MuiButton-root')
    }

    getCheckTitle(){
        return cy.get('h3')
    }

    getCheckSkillName(){
        return cy.get('.MuiBox-root > :nth-child(2) > :nth-child(1)')
    }

    getCheckDevelopers(){
        return cy.get(':nth-child(2) > :nth-child(2) > ul')
    }

    getCheckTechnologies(){
        return cy.get(':nth-child(2) > :nth-child(3) > ul')
    }

    



}
export default new appSkillElement();