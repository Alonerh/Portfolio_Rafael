import { useState } from 'react';

import {
    Content,
    Title,
    ProjectsArea,
    ProjectBlock,
    ProjectContainer,
    ProjectLink,
    ProjectImage,
    ProjectText
} from './styled';

import devsFood from '../../assets/devsFood.png';
import cloneWhatsapp from '../../assets/cloneWhatsapp.png';
import starbucks from '../../assets/Starbucks.png';
import olxpage from '../../assets/olxpage.png';
import memoryGame from '../../assets/memoryGame.png';
import imcPage from '../../assets/imcPage.png';
import oldGame from '../../assets/oldGame.png';
import gifPage from '../../assets/gifPage.png';
import urnaPage from '../../assets/urnaPage.png';

const Projects = ()=>{
    return (
        <Content>
            <Title>
                Projetos
            </Title>
            <ProjectsArea>
                <ProjectBlock href="https://calculador-de-imc-react.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink > 
                            <ProjectImage src={imcPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que mede seu IMC
                    </ProjectText>
                </ProjectBlock>            
                <ProjectBlock href="https://devs-food-nu.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={devsFood}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Projeto inspirado no aplicativo de entregas/delivery 'Ifood'.
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://react-jogo-da-memoria-six.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={memoryGame}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Um jogo da memória funcional e divertido
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Starbucks/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={starbucks}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Front-end do site do Starbucks no qual treinei o uso de Display Grid.
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Jogo-da-Velha/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={oldGame}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site em que você pode jogar o Jogo da Velha
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Buscador-de-GIFs/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={gifPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site para buscar GIFs (100% funcional)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Urna-Eletronica/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={urnaPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que simula uma urna eleitoral (Responsividade apenas para PC)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://whatsapp-clone-coral-omega.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={cloneWhatsapp}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Projeto inspirado no aplicativo de mensagens Whatsapp. (Chat funcional no Backend)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://olx-page.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={olxpage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Front-end do site da Olx (Backend funcional em servidor de hospedagem)
                    </ProjectText>
                </ProjectBlock>
            </ProjectsArea>
        </Content>
    )
};

export default Projects;