const DialogLogin = ({ open = false, handleOpen = () => { } }) => {
    return (
        <div
            style={{ display: open ? 'block' : "none" }}
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            onClick={handleOpen}
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <h1
                                        className="font-body text-4xl font-semibold text-primary dark:text-black md:text-5xl lg:text-6xl"
                                    >
                                        Bem vindo
                                    </h1>
                                    <form className="pt-6 w-full" onClick={evt => evt.stopPropagation()}>
                                        <div className="flex flex-col w-full">
                                            <div className="w-full">
                                                <label
                                                    className="block pb-3 font-body font-medium text-primary dark:text-black"
                                                >Email</label>
                                                <input
                                                    type="email"
                                                    id="email"                                                    
                                                    className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-black"
                                                />
                                            </div>
                                            <div className="w-full pt-6">
                                                <label
                                                    className="block pb-3 font-body font-medium text-primary dark:text-black"
                                                >Senha</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-black"
                                                />
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                className="mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-black transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
                            >
                                Enviar
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogLogin