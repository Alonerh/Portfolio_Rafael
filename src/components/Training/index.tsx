import {
    Content,
    Title,
    ContainerBlocks,
    Block,
    BlockCategory,
    BlockName,
    BlockLocation,
    BlockTime
} from './styled';

const Training = ()=>{
    return (
        <Content>
            <Title>
                Formação
            </Title>
            <ContainerBlocks>
                <Block>
                    <BlockCategory>
                        Tecnólogo
                    </BlockCategory>
                    <BlockName>
                        Análise e Desenvolvimento de Sistemas
                    </BlockName>
                    <BlockLocation>
                        - Universidade Federal do Cariri
                    </BlockLocation>
                    <BlockTime>
                        2023 - Cursando
                    </BlockTime>
                </Block>
                <Block>
                    <BlockCategory>
                        Curso
                    </BlockCategory>
                    <BlockName>
                        HTML5 e CSS3
                    </BlockName>
                    <BlockLocation>
                        - B7Web
                    </BlockLocation>
                    <BlockTime>
                        2022
                    </BlockTime>
                </Block>
                <Block>
                    <BlockCategory>
                        Curso
                    </BlockCategory>
                    <BlockName>
                        Javascript
                    </BlockName>
                    <BlockLocation>
                        - B7Web
                    </BlockLocation>
                    <BlockTime>
                        2022
                    </BlockTime>
                </Block>
                <Block>
                    <BlockCategory>
                        Curso
                    </BlockCategory>
                    <BlockName>
                        GIT e GITHUB
                    </BlockName>
                    <BlockLocation>
                        - B7Web
                    </BlockLocation>
                    <BlockTime>
                        2022
                    </BlockTime>
                </Block>
                <Block>
                    <BlockCategory>
                        Curso
                    </BlockCategory>
                    <BlockName>
                        ReactJS
                    </BlockName>
                    <BlockLocation>
                        - B7Web
                    </BlockLocation>
                    <BlockTime>
                        2023
                    </BlockTime>
                </Block>
            </ContainerBlocks>
        </Content>
    )
};

export default Training;