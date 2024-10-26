import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock } from 'react-icons/md';

import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Content, CriarText, EsqueciText, Form, Row, Signin, SpanStyled, StyledSection, Title } from './styles';
import { IFormLogin, defaultValues } from './types';

const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "No minimo 8 caracteres").required("Campo obrigatório"),
}).required();
 
function App() {
    const numSpans = 260;
    const spans = [];

    for (let i = 0; i < numSpans; i++) {
        spans.push(<SpanStyled key={i} />);
    }

    const {control, handleSubmit, formState: { errors, isValid  } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
    });

    const onSubmit = async (formData: IFormLogin) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
            
            if(data.length && data[0].id){
                alert("Usuário Logado.")
                return
            }

            alert('E-mail ou senha inválido.');
        }catch(e){
            console.log(e)
            alert("Houve um erro, tente novamente.");
        }
    };

    return (<>
        <StyledSection>
            {spans}

            <Signin>
                <Content>
                    <Title>Login</Title>

                    <form onSubmit={handleSubmit(onSubmit)}>
                            <Form>
                                <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} errorMessage={errors.email?.message}/>
                                <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" control={control} errorMessage={errors.password?.message}/>
                            </Form>

                            <Row>
                                <EsqueciText>Esqueci minha senha</EsqueciText>
                                <CriarText>Criar Conta</CriarText>
                            </Row>

                            <Button title="Entrar" type="submit" disabled={!isValid} variant={!isValid ? "disabled" : "primary"}/>
                     </form>    
                </Content>
            </Signin>
        </StyledSection>
    </>)
}

export default App;
