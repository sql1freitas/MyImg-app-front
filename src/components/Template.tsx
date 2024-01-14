interface TemplateProps {
    children: React.ReactNode
}




export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {

    return(
            
            <>
            <Header/>
            
            <div className="container mx-auto mt-8 px-4">
            {props.children}
            </div>
            
            
            <Footer/>
            </>
    )

  


}

const Header: React.FC = () => {
    return(
        <header className="font-mono bg-cyan-500 text-white py-5">
            <div className="container mx-auto text-left">
                    <h1 className="text-2xl font-bold">
                        MyImg
                    </h1>
            </div>
        </header>
    )
}

const Footer: React.FC = () => {

    return(
            <footer className="font-sans bg-cyan-500 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-3x1 font-bold">

                            Desenvolvido por Matheus Freitas 

                    </h1>


                </div>


            </footer>


    )


}
    
