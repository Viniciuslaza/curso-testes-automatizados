
import appSkillElement from "../../components/appSkill-element";


class appSkillList{
    checkTitle(title){
        cy.wait(1000)
        appSkillElement.getCheckTitle().contains(title)
    }

    checkSkillName(skill){
        appSkillElement.getCheckSkillName().contains(skill)
    }   
   
    checkDevelopers(developers){
        appSkillElement.getCheckDevelopers().contains(developers)
    }

    checkTechnologies(technologies){
        appSkillElement.getCheckTechnologies().contains(technologies)
    }
}
export default new appSkillList();