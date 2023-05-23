const Footer = () => {
    return (
        <div className="container mx-auto">
            <div
                className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12"
            >
                <div className="mr-auto flex flex-col items-center sm:flex-row">
                    <p className="pt-5 font-body font-light text-primary dark:text-primary sm:pt-0">
                        Projeto integrador - Univesp
                    </p>
                </div>
                <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">                    
                </div>
            </div>
        </div>
    )
}

export default Footer