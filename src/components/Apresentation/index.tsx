import {
    Content,
    RightSide,
    SmallText,
    BigText,
    Skills,
    SocialMediaContainer,
    SocialMedia,
    LeftSide,
    ImageContaner,
    Image
} from './styled';

import developer from '../../assets/developer.png';

const Apresentation = ()=>{
    return (
        <Content>
            <LeftSide>
                <SmallText>
                    Olá, eu sou
                </SmallText>
                <BigText>
                    Rafael Alcantara.
                </BigText>
                <Skills>
                    Desenvolvedor Web | React 
                </Skills>
                <SocialMediaContainer>
                    <SocialMedia href='https://www.linkedin.com/in/rafael-alcantara-a0061923b/' target='_blank'>
                        LinkedIn
                    </SocialMedia>
                    <SocialMedia href="https://github.com/Alonerh" target='_blank'>
                        GitHub
                    </SocialMedia>
                    <SocialMedia href="https://api.whatsapp.com/send/?phone=5588988399456&text&type=phone_number&app_absent=0" target='_blank'>
                        Whatsapp
                    </SocialMedia>
                </SocialMediaContainer>
            </LeftSide>
            <RightSide>
                <ImageContaner>
                    <Image src={developer}/>
                </ImageContaner>
            </RightSide>
        </Content>
    )
};

export default Apresentation;