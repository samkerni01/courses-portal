import { useState } from 'react';
import { Title, Button, Text, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(0);

    return (
        <>
            <Title tag='h1'>Текст</Title>

            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='primary'>Кнопка</Button>

            <Text description='course'>Курсы</Text>
            <Text description='review'>Отзывы</Text>
            <Text description='advantages'>Преимущества</Text>

            <Tag size='s' color='red'>Red</Tag>
            <Tag size='m' color='green'>Green</Tag>
            <Tag size='s' color='ghost'>Ghost</Tag>
            <Tag size='m' color='primary'>Primary</Tag>

            <Rating rating={rating} setRating={setRating} />
            <Rating rating={3} />
        </>
    );
}
