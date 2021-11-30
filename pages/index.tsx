import { Title, Button, Description } from '../components';

export default function Home(): JSX.Element {
    return (
        <>
            <Title tag='h1'>Текст</Title>
            <Button appearance='primary' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>Кнопка</Button>
            <Description description='course'>Курсы</Description>
            <Description description='review'>Отзывы</Description>
            <Description description='advantages'>Преимущества</Description>
        </>
    );
}
