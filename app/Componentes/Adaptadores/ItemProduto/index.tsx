import Style from "@/app/Styles/Default";
import { Text, View, Image } from "react-native";
import Produto from '@/app/Models/Produto';
import React from "react";


interface propProd{
    produto:Produto,
}

const ItemProduto: React.FC<propProd> = ({produto}) => {
    console.log(produto)

    return (
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>{"R$ " + produto.preco}</Text>
            <Image src= {produto.foto}/>
        </View>
    )
}

export default ItemProduto;