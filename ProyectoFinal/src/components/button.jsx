export const Button = ({text, href})=>{
    return(
        <div className="Button">
        <a href={href}>
            {text}
        </a>
        </div>
    )
}