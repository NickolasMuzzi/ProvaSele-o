import React from 'react';
import '../styles/ComponentStyles/CardMobileList.css'
type CardMobileListProps = {
    className?: string
    value?: any
}

const CardMobileList = ({ className, value }: CardMobileListProps) => {
    return (
        <div className="card">
            <div className="row">
                <div className="tag">NOME</div>
                <div className="value">{value?.nome}</div>
            </div>
            <div className="row">
                <div className="tag">EMAIL</div>
                <div className="value">{value?.email}</div>
            </div>

            <div className="row">
                <div className="tag">NASC.</div>
                <div className="value">{value?.nascimento}</div>
            </div>

            <div className="row">
                <div className="tag">TEL.</div>
                <div className="value">{value?.telefone}</div>
            </div>

        </div>
    )
}
export default CardMobileList