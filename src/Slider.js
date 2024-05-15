import './App.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Slider(){
    var items = [
        {
            name: "Удлинитель b325",
            img: "./7fe7dc6fcb0c9a52d27214a47b1fbae5.jpg",
            description: "Новая поставка! Всего 420р."
        },
        {
            name: "Светодиодная лента Неон",
            img: "./white-led-strip-sealed.1.jpg",
            description: "Лучшая цена! 890р."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className='Paper'>
            <h2>{props.item.name}</h2>
            <img src={props.item.img}></img>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                В корзину
            </Button>
        </Paper>
    )
}
