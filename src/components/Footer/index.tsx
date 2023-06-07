import {
    FooterMain,
    FooterContainer,
    FooterText,
    FooterYear,
    FooterMedias,
    FooterMedia,
    FooterImage,
    FooterOffering
} from './styled';

import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';

const Footer = ()=>{
    return (    
        <FooterMain>
            <FooterContainer>
                
                <FooterMedias>
                    <FooterMedia href="https://www.linkedin.com/in/rafael-alcantara-a0061923b/" target='_blank'>
                        <FooterImage src={linkedIn}/>
                    </FooterMedia>
                    <FooterMedia href="https://github.com/Alonerh" target='_blank'>
                        <FooterImage src={github}/>
                    </FooterMedia>
                    <FooterMedia href="https://api.whatsapp.com/send/?phone=5588988399456&text&type=phone_number&app_absent=0" target='_blank'>
                        <FooterImage src={whatsapp}/>
                    </FooterMedia>
                </FooterMedias>
                
                <FooterYear>
                    &copy; Rafael Alcantara<br/>2023
                </FooterYear>
                <FooterText>
                    Estou disponível para novos projetos.<br/>
                    Entre em contato para conversarmos.
                </FooterText>
                <FooterOffering href="https://www.flaticon.com/br/icones-gratis/marcas-e-logotipos" title="marcas e logotipos ícones">
                    Marcas, logotipos e ícones criados por Freepik - Flaticon
                </FooterOffering>
            </FooterContainer>
        </FooterMain>
    )
};

export default Footer;