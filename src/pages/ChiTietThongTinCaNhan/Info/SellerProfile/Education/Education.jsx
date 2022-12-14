import React, { useState } from 'react'


export default function Education(props) {
    const [inputEducation, setInputEducation] = useState('');
    const [choseOption, setChoseOption] = useState('Beginner')
    const [renderEducation, setRenderEducation] = useState([]);
    const [invisibleEducation, setInvisibleEducation] = useState(false);
    const [invisiblehandleOffEducationA, setInvisiblehandleOffEducationA] = useState(true);


    // let handleShowEducation = (e) => {
    //     e.preventDefault();
    //     setInvisibleEducation(true);
    //     setInvisiblehandleOffEducationA(false)
    // }

    // let handleOffEducation = (e) => {
    //     e.preventDefault();
    //     setInvisibleEducation(false)
    //     setInvisiblehandleOffEducationA(true)
    // }

    // let handleIP = (e) => {
    //     e.preventDefault();
    //     setRenderEducation(preven => {
    //         return [...preven, [inputEducation, "- " + choseOption]]
    //     })
    //     setInputEducation('')
    //     setInvisiblehandleOffEducationA(true)
    //     setInvisibleEducation(false)
    //     setChoseOption('Beginner')

    // }


    return (
        <form className='js-form-skills'>
            <div className="inner-row skills">
                <div className='skills d-flex justify-content-between'>
                    <h3 className='alt hint--top'>Education</h3>
                </div>
                <section>

                    <ul className='items-list'>
                        {props.renderND.certification?.map((certification, index) => {
                            return <li className='d-flex justify-content-between' key={index}>

                                <span className='titlle'>{certification}</span>

                            </li>
                        })}

                    </ul>
                </section>


            </div>
        </form>
    )
}
