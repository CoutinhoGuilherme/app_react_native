import {View} from "react-native"
import ItemProduto from "../ItemProduto"
import Style from "@/app/Styles/Default"
import { ScrollView} from "react-native-gesture-handler"
import Produto from '@/app/Models/Produto'
import React from "react"

interface propList{
    produtos:Produto[],
}

const ListaProdutos: React.FC<propList> = ({produtos}) => { 
    return (
        <ScrollView>

        <View style={Style.container}>
            {produtos.map((produto) => <ItemProduto produto={produto} key={produto.id} >

            </ItemProduto>)}
        </View>

        </ScrollView>
    )
}

export default ListaProdutos