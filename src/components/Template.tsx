interface TemplateProps {
    children: React.ReactNode
}




export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {

    return(
            
            <>
            <Header/>


            {props.children}
            
            
            
            
            
            </>
    )

  


}

const Header: React.FC = () => {
    return(
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between itens-center px-4">
                    <h1 className="text -3x1">
                        MyImg
                    </h1>
            </div>
        </header>
    )
}
    
