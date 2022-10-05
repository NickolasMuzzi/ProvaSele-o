import React, { useEffect, useState } from 'react';
import '../styles/ComponentStyles/MobileList.css'
import CardMobileList from './CardMobileList';
type MobileListProps = {
    className?: string
    values?: any
}

const MobileList = ({ className, values }: MobileListProps) => {
    const [currentValue, setCurrentValue] = useState<any>()
    const setBordersDefault = (index: number) => {
        for (var i = 0; i < values.length; i++) {
            if (index !== i) {
                var setDefault = document.getElementById(i.toString())!
                setDefault.style.border = '1px solid #909090'
            }
        }
    }

    const renderSpecificValue = (index: string) => {
        setBordersDefault(parseInt(index))
        var position = document.getElementById(index)!
        position.style.border = "2px solid #29abe2"
        return setCurrentValue(values.filter((value: { id: string; }) => value?.id == index+1)[0])
    }
    return (

        <div className={'container-list'}>
            {values ?
                <div className="align-card">
                    <div className="list-positions">
                        {values.map((value: any, index: string) => {
                            return (
                                <>
                                    <div key={index} className="position" id={index} onClick={() => renderSpecificValue(index)}>
                                        {index+1}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <CardMobileList value={currentValue} />
                </div>
                :
                <div>

                </div>
            }



        </div>
    )
}
export default MobileList