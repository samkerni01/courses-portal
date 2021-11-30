import { Title, Button, Text, Tag } from '../components';

export default function Home(): JSX.Element {
    return (
        <>
            <Title tag='h1'>Текст</Title>
            <Button appearance='primary' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>Кнопка</Button>
            <Text description='course'>Курсы</Text>
            <Text description='review'>Отзывы</Text>
            <Text description='advantages'>Преимущества</Text>
            <Tag size='s' color='red'>Red</Tag>
            <Tag size='m' color='green'>Green</Tag>
            <Tag size='s' color='ghost'>Ghost</Tag>
            <Tag size='m' color='primary'>Primary</Tag>
        </>
    );
}
