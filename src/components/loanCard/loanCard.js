import { Button } from "antd";
import { getTimeRemaining, numberWithCommas } from "../../convert.js";
import "./loanCard.scss";



export default function LoanCard(props) {
    const {
        title,
        tranche,
        available,
        annualisedReturn,
        termRemaining,
        ltv,
        amount,
        hasInvested = false,
        onClick = () => {},
    } = props;

    return (
        <div className="loan-card" data-testid="loan-card">
            <div className="loan-card-header">
                <h2 className="loan-card-heading">{title}</h2>
                {hasInvested && <div className="loan-card-invested-text">Invested</div>}
            </div>
            <div className="loan-card-body">
                <div className="loan-card-items">
                    <div className="loan-item">Tranche: {tranche}</div>
                    <div className="loan-item">
                        Available: £{(available.toLocaleString("en-US"))}
                    </div>
                    <div className="loan-item">Annualised Return: {annualisedReturn}</div>
                    <div className="loan-item">
                        Term Remaining: {getTimeRemaining(termRemaining)}
                    </div>
                    <div className="loan-item">Ltv: {ltv}</div>
                    <div className="loan-item">Amount: £{numberWithCommas(amount)}</div>
                </div>
                <div className="loan-card-cta-wrapper">
                    <Button
                        type="primary"
                        size="large"
                        onClick={onClick}
                        disabled={available === 0}
                    >
                        Invest
                    </Button>
                </div>
            </div>
        </div>
    );
}

