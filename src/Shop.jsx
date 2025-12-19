import { useState, useEffect } from 'react'
import './CSS/Shop.css'
import UseImages from './useImages'
import { useLocation } from 'react-router'

function Shop() {
    const { state } = useLocation()
    const [active, setActive] = useState(null)
    const [step, setStep] = useState(state?.step || 'All')

    const things = [
        {
            id: '1',
            label: 'All',
        },
        {
            id: '2',
            label: 'Phones',
        },
        {
            id: '3',
            label: 'Tablets',
        },
        {
            id: '4',
            label: 'Laptops',
        },
        {
            id: '5',
            label: 'Clothes',
        },
        {
            id: '6',
            label: 'Shoes',
        },
        {
            id: '7',
            label: 'Watches',
        },
        {
            id: '8',
            label: 'Sunglasses'
        }
    ]

    useEffect(() => {
        console.log(step)
    }, [step])

    return (
        <>
            <div className="shop">
                <div className="topbar">
                    {things.map((t) => (
                        <p className={`bar-item ${step === t.label ? 'active' : ''}`} key={t.id} onClick={() => {setActive(t.id); setStep(t.label)}}>{t.label}</p>
                    ))}
                </div>

                <div className="s-items">
                    <div className="test">
                        {step === 'All' && (
                            <>
                                <UseImages category={'smartphones'} limit={12} skip={0}/>
                                <UseImages category={'tablets'} limit={12} skip={0}/>
                                <UseImages category={'smartphones'} limit={12} skip={0}/>
                                <UseImages category={'mens-watches'} limit={12} skip={0}/>
                                <UseImages category={'laptops'} limit={12} skip={0}/>
                                <UseImages category={'mens-shirts'} limit={12} skip={0}/>
                                <UseImages category={'mens-shoes'} limit={12} skip={0}/>
                                <UseImages category={'sunglasses'} limit={12} skip={0}/>
                            </>
                        )}
                        {step === 'Laptops' && <UseImages category={'laptops'} limit={12} skip={0}/>}
                        {step === 'Tablets' && <UseImages category={'tablets'} limit={12} skip={0}/>}
                        {step === 'Phones' && <UseImages category={'smartphones'} limit={12} skip={0}/>}
                        {step === 'Clothes' && <UseImages category={'mens-shirts'} limit={12} skip={0}/>}
                        {step === 'Shoes' && <UseImages category={'mens-shoes'} limit={12} skip={0}/>}
                        {step === 'Watches' && <UseImages category={'mens-watches'} limit={12} skip={0}/>}
                        {step === 'Sunglasses' && <UseImages category={'sunglasses'} limit={12} skip={0}/>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Shop