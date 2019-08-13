import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button';

export default class TechnicalDescription extends Component {
    render() {

        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        powerSuplay,
                        frequency,
                        numberOfLed,
                        sourceOfLight,
                        colorTemperatury,
                        luminousFlux,
                        nominalPower,
                        lightEfficiency,
                        lifetime,
                        applianceClasses,
                        ipProtection,
                        ikProtection,
                        housingMaterial,
                        bindingType,
                        conector,
                        cableLength,
                        ledLength,
                        ledLengthWithHandle,
                        outerDiameter,

                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>Dane techniczne</h1>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <p className="text-muted ">
                                        {powerSuplay} <br />
                                        {frequency} <br />
                                        {numberOfLed} <br />
                                        {sourceOfLight} <br />
                                        {colorTemperatury} <br />
                                        {luminousFlux} <br />
                                        {nominalPower} <br />
                                        {lightEfficiency} <br />
                                        {lifetime} <br />
                                        {applianceClasses} <br />
                                        {ipProtection} <br />
                                        {ikProtection} <br />
                                        {housingMaterial} <br />
                                        {bindingType} <br />
                                        {conector} <br />
                                        {cableLength} <br />
                                        {ledLength} <br />
                                        {ledLengthWithHandle} <br />
                                        {outerDiameter} <br />



                                    </p>

                                </div>


                            </div>
                        </div>
                    )
                }}

            </ProductConsumer>

        )
    }
}
