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
import tarefasPage from '../../assets/tarefas.png';
import olxpage from '../../assets/olxpage.png';
import memoryGame from '../../assets/memoryGame.png';
import imcPage from '../../assets/imcPage.png';
import oldGame from '../../assets/oldGame.png';
import gifPage from '../../assets/gifPage.png';
import urnaPage from '../../assets/urnaPage.png';
import medicenterPage from '../../assets/medicenter.png';
import filmesPage from '../../assets/filmes.png';
import cadastroPage from '../../assets/cadastro.png';
import relogioPage from '../../assets/relogio.png';
import quisSimplesPage from '../../assets/quisSimples.png';
import quisPontPage from '../../assets/quisPont.png';
import desenhopage from '../../assets/desenho.png';
import pizzasPage from '../../assets/pizza.png';
import climaPage from '../../assets/clima.png';
import bateriaPage from '../../assets/bateria.png';
import arrastarPage from '../../assets/arrastar.png';
import portExampPage from '../../assets/portExamp.png';
import awaxPage from '../../assets/awax.png';

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
                <ProjectBlock  href="https://lista-de-tarefas-fawn.vercel.app" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={tarefasPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site de Lista de Tarefas (NOVO)
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
                <ProjectBlock href="https://alonerh.github.io/Filmes-em-Cartaz/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={filmesPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que mostra os filmes que estão em cartaz (Funcional)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Relogio/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={relogioPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que mostra um relógio analógico e digital (Funcional)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Quiz-BS/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={quisSimplesPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site de Quis sobre programação (Feito com Bootstrap)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Quiz-Simples/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={quisPontPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Quis sobre programação (Com pontuação)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Quadro-de-Desenho/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={desenhopage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site em que você pode desenhar
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock  href="https://alonerh.github.io/Compra-de-Pizzas/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={pizzasPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site para compra de pizzas
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/AWAX/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={awaxPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Página para venda de produtos e e-books (Marketing | Landing Pages)
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Medicenter/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={medicenterPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Página para clínicas na área da saúde
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Clima/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={climaPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site para ver o clima do seu local
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Bateria/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={bateriaPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que toca bateria de acordo com as letras que você aperta
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Arrasta-e-Solta/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={arrastarPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Site que você pode arrastar os blocos para as posições
                    </ProjectText>
                </ProjectBlock>
                <ProjectBlock href="https://alonerh.github.io/Portfolio/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={portExampPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Exemplo de Portfólio para designers e devs
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
                <ProjectBlock  href="https://alonerh.github.io/Cadastro-de-DEVs/" target='_blank'>
                    <ProjectContainer>
                        <ProjectLink> 
                            <ProjectImage src={cadastroPage}/>
                        </ProjectLink>
                    </ProjectContainer>
                    <ProjectText>
                        Formulário para desenvolvedores (FrontEnd)
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