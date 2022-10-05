import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import '../styles/PageStyles/ListSection.css'
import BtnToTop from '../icons/topo-pag.svg'
import { scrollToHome } from '../utils/ScrollFunctions'
import { isMobile } from 'react-device-detect'
import MobileList from '../components/MobileList'
import apiClient from '../config/axiosConfig'
type ListSectionProps = {
    className?: string
    
}

const ListSection = ({ className }: ListSectionProps) => {
    const [data, setData] = useState<any>()
    
    const fetchData = () => {
        apiClient.get(`cadastro/cadastros`)
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() =>{
        if(!data){
            fetchData()
        }
    }, [data])

    return (
        <div className={className || "list-section"}>
            <div className="container-list">
                {isMobile ?
                    <div className="align-position-and-card">
                        <h1>LISTA DE CADASTRO</h1>
                        <MobileList values={data} />
                        <img alt="Início" src={BtnToTop} className="btn-top" onClick={() => scrollToHome()} />
                    </div>
                    :
                    <>
                        <h1>LISTA DE CADASTRO</h1>
                        <Table values={data} />
                        <img alt="Início" src={BtnToTop} className="btn-top" onClick={() => scrollToHome()} />
                    </>
                }

            </div>
        </div>
    )
}
export default ListSection