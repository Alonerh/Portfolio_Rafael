import { useState } from 'react';
import {
    Content,
    Title,
    ContentSkills,
    SkillContainer,
    SkillsBlock,
    Skill,
    Observations,
    SkillName,
    SkillDescription,
} from './styled';

import html from '../../assets/htmlEDIT.png';
import css from '../../assets/cssEDIT.png';
import js from '../../assets/jsEDIT.png';
import github from '../../assets/github.png';
import react from '../../assets/react.png';

const Skills = ()=>{

    const [skill, setSkill] = useState({
        name: '', 
        desc: '/* Passe o mouse por cima de alguma habilidade para ler a descrição */'
    });

    const handleChangeSkill = (name:string, desc: string)=>{
        setSkill({name, desc} );
    };

    return (
        <Content>
            <Title>
                Habilidades
            </Title>
                <ContentSkills>
                    <SkillsBlock>
                        <SkillContainer>
                            <Skill 
                                src={html} 
                                    onMouseOver={()=>handleChangeSkill('HTML', 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores')} 
                                    onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                        <SkillContainer>
                            <Skill 
                                src={css}
                                onMouseOver={()=>handleChangeSkill('CSS', 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.')} 
                                onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                        <SkillContainer>
                            <Skill 
                                src={js}
                                onMouseOver={()=>handleChangeSkill('Javascript', 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.')} 
                                onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                        <SkillContainer>
                            <Skill 
                                src={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} 
                                onMouseOver={()=>handleChangeSkill('Git', 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo')} 
                                onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                        <SkillContainer>
                            <Skill 
                                src={github}
                                onMouseOver={()=>handleChangeSkill('GitHub', 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.')} 
                                onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                        <SkillContainer>
                            <Skill 
                                src={react}
                                onMouseOver={()=>handleChangeSkill('React', 'React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. ')} 
                                onMouseLeave={()=>handleChangeSkill('', '/* Passe o mouse por cima de alguma habilidade para ler a descrição */')}
                            />
                        </SkillContainer>
                    </SkillsBlock>
                    <Observations>
                        <SkillName>
                            {skill.name}
                        </SkillName>
                        <SkillDescription>
                            {skill.desc}
                        </SkillDescription>
                    </Observations>
                </ContentSkills>         
        </Content>
    )
};

export default Skills;