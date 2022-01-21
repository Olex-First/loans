import React, { useState } from "react";
import { getTimeRemaining, numberWithCommas } from "../../convert.js";
import { Button, InputNumber } from "antd";
import "./investForm.scss";

export default function InvestForm(props) {
    const { title, available, termRemaining, makeInvestment = () => {} } = props;

    const [investAmount, setInvestAmount] = useState(0);
    const [hasError, setHasError] = useState(false);

    function handleClickInvest() {
        if (investAmount > 0 && !hasError) {
            makeInvestment(investAmount);
        }
    }

    function handleChange(value) {
        setInvestAmount(value);
        if (value > available) {
            setHasError(true);
        } else if (hasError) {
            setHasError(false);
        }
    }

    return (
        <div className="invest-form" >
            <div className="invest-form-heading">{title}</div>
            <div className="invest-form-details-wrapper">
                <div className="invest-form-details">
                    Amount available: £{numberWithCommas(available)}
                </div>
                <div className="invest-form-details">
                    Loan ends in: {getTimeRemaining(termRemaining)}
                </div>
            </div>

            <div className="invest-form-items-wrapper">
                <div className="invest-form-label">Investment amount (£)</div>
                <div className="invest-form-items-inner">
                    <div className="invest-form-amount">
                        <InputNumber
                            min={0}
                            max={available}
                            defaultValue={investAmount}
                            value={investAmount}
                            step={500}
                            onChange={handleChange}
                            onPressEnter={handleClickInvest}
                        />
                    </div>
                    <div className="invest-form-cta">
                        <Button
                            type="primary"
                            size="medium"
                            onClick={handleClickInvest}
                            disabled={hasError || !(investAmount > 0)}
                        >
                            Invest
                        </Button>
                    </div>
                </div>
                {hasError && (
                    <div className="invest-form-error">
                        Investment amount exceeds available amount
                    </div>
                )}
            </div>
        </div>
    );
}


