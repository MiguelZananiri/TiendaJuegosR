function ModalMensaje({ mensaje }) {
    return <>
        <div className="modal fade" id="modal-mensaje" data-bs-theme="dark" tabIndex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true" data-bs-backdrop="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Mensaje</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="mensaje">
                        {mensaje}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ModalMensaje