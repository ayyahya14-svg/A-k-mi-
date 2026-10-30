import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useState } from 'react';

const DATA = [
  { id:'1', sehir:'Van', ad:'Mehmet Usta Gece Çorbası', tur:'Çorbacı', tel:'05450000001' },
  { id:'2', sehir:'Ankara', ad:'Çankaya Gece Döner', tur:'Döner', tel:'05450000002' },
  { id:'3', sehir:'İstanbul', ad:'Kadıköy 24 Saat Açık', tur:'Döner', tel:'05450000003' },
];

export default function App(){
  const [sehir,setSehir]=useState('Tümü');
  const filtre=sehir==='Tümü'?DATA:DATA.filter(d=>d.sehir===sehir);
  return(
    <View style={{flex:1,backgroundColor:'#0f172a',paddingTop:60,padding:16}}>
      <Text style={{color:'white',fontSize:28,fontWeight:'bold'}}>Açık mı? 🇹🇷</Text>
      <Text style={{color:'#22c55e',marginBottom:12}}>Gece açık mekanlar</Text>
      <View style={{flexDirection:'row',gap:8,marginBottom:12}}>
        {['Tümü','Van','Ankara','İstanbul'].map(s=>(
          <TouchableOpacity key={s} onPress={()=>setSehir(s)} style={{backgroundColor:sehir===s?'#22c55e':'#1e293b',padding:8,borderRadius:20,paddingHorizontal:14}}>
            <Text style={{color:'white'}}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList data={filtre} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={{backgroundColor:'#1e293b',padding:16,borderRadius:18,marginBottom:12}}>
          <Text style={{color:'white',fontWeight:'bold'}}>{item.ad}</Text>
          <Text style={{color:'#94a3b8'}}>{item.sehir} • {item.tur}</Text>
          <TouchableOpacity onPress={()=>Linking.openURL(`tel:${item.tel}`)} style={{backgroundColor:'#22c55e',padding:10,borderRadius:10,marginTop:8,alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>ARA</Text>
          </TouchableOpacity>
        </View>
      )}/>
    </View>
  )
}
