import { Title, Button } from '../components';

export default function Home(): JSX.Element {
    return (
        <>
            <Title tag='h1'>Текст</Title>
            <Button appearance='primary' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>Кнопка</Button>
        </>
    );
}
