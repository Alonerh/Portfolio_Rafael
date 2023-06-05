import { 
    Container,
    Main,
    Section,
    Content,
    Title,
    Text,
    ArrowContainer,
    ToUp
} from './styled';

import Header from '../../components/Header';
import Apresentation from '../../components/Apresentation';
import Skills from '../../components/Skills';
import Training from '../../components/Training';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';

import arrowUp from '../../assets/arrowUp.svg';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setTheme } from '../../redux/Reducers/ThemeReducer';

const Home = () =>{
    const theme = useAppSelector(state => state.theme.status);
	const dispatch = useDispatch();

	/* const handleTheme = ()=>{
		if (theme === 'light') {
			dispatch(setTheme('dark'));
		} else {
			dispatch(setTheme('light'));
		}
	}; */


    return (
        <Container id='container'>
            <Header/>
            <Main>
                <Section id='apresentation'>
                    <Apresentation />
                </Section>
                <Section id='aboutMe'>
                    <Content>
                        <Title>
                            Sobre mim
                        </Title>
                        <Text>
                            Sou desenvolvedor Web e ReactJS. Estou cursando Análise e Desenvolvimento de Sistemas e sou 
                            apaixonado por programação. Além disso, sou empreendedor e estou sempre
                            em busca de novas oportunidades para aplicar minhas habilidades e conhecimentos.
                            <br/><br/>
                            Ao longo da minha carreira, tive a oportunidade de desenvolver diversos projetos
                            desafiadores e complexos, o que me permitiu adquirir uma base sólida de conhecimentos
                            em diversas tecnologias e frameworks. Minha especialidade em ReactJS me permite criar
                            aplicações web robustas e escaláveis, que atendem às necessidades específicas
                            de cada cliente.
                        </Text>
                    </Content>
                </Section>
                <Section id='projects'>
                    <Projects/>
                </Section>
                <Section id='skills'>
                    <Skills/>
                </Section>
                <Section id='training'>
                    <Training/>
                </Section>
                <Footer/>
                {/* <ArrowContainer href="#container">
                    <ToUp src={arrowUp}/>
                </ArrowContainer> */}
            </Main>
        </Container>
        )
};
//Theme: {theme}<br/>

export default Home;