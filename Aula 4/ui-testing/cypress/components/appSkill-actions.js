import appSkillElement from "./appSkill-element";

class appSkillActions{
    
    writeSkillName(skillName){
        appSkillElement.selectFieldSkillName().type(skillName);
    }

    writeSkillDevelopers(skillName){
        appSkillElement.selectFieldSkillDevelopers().type(skillName);
    }

    writeSkillTecnologic(skillName){
        appSkillElement.selectFieldSkillTecnologic().type(skillName);
    }

    writeSkillRoles(skillName){
        appSkillElement.selectFieldSkillRoles().type(skillName);
    }

    clickButtonAddSkill(skillName){
        appSkillElement.getButtonAddSkill().click();
    }
}

export default new appSkillActions();
