


interface BorderStyle{
    color: string;
    espessura:number;
}

type RadiusValue = number|string;


interface FotoArrProps extends BorderStyle {
    raio: RadiusValue;
    src:string;
}


export default function FotoArredondada(props:FotoArrProps) {

    return (
        <img style={{borderRadius:props.raio}} src={props.src}/>
    )
}