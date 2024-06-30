import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [dialogue, setDialogue] = useState('');
    const [pegasusSummary, setPegasusSummary] = useState('');
    const [bartSummary, setBartSummary] = useState('');
    const [pegasusError, setPegasusError] = useState('');
    const [bartError, setBartError] = useState('');

    async function queryPegasus(data) {
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/transformersbook/pegasus-samsum",
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error during Pegasus API request:", error);
            return { error: 'Pegasus API request failed' };
        }
    }

    async function queryBart(data) {
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/lidiya/bart-large-xsum-samsum",
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error during BART API request:", error);
            return { error: 'BART API request failed' };
        }
    }

    const summarizeWithPegasus = () => {
        queryPegasus({ "inputs": dialogue }).then((response) => {
            if (response && Array.isArray(response) && response[0] && response[0].generated_text) {
                setPegasusSummary(response[0].generated_text);
                setPegasusError('');
            } else if (response && response.error) {
                setPegasusSummary('');
                setPegasusError(`Error: ${response.error}`);
            } else {
                setPegasusSummary('');
                setPegasusError("Error: Unable to retrieve summary.");
            }
        }).catch(error => {
            console.error("Error during Pegasus summarization:", error);
            setPegasusSummary('');
            setPegasusError("Error: Unable to retrieve summary.");
        });
    };

    const summarizeWithBart = () => {
        queryBart({ "inputs": dialogue }).then((response) => {
            if (response && response[0] && response[0].summary_text) {
                setBartSummary(response[0].summary_text);
                setBartError('');
            } else if (response && response.error) {
                setBartSummary('');
                setBartError(`Error: ${response.error}`);
            } else {
                setBartSummary('');
                setBartError("Error: Unable to retrieve summary.");
            }
        }).catch(error => {
            console.error("Error during BART summarization:", error);
            setBartSummary('');
            setBartError("Error: Unable to retrieve summary.");
        });
    };

    return (
        <div className="home-page-content">
            <h1>Summarize Dialogue</h1>
            <div className="input-output">
                <div className="input-area">
                    <textarea
                        id="dialogue"
                        placeholder="Enter dialogue here..."
                        value={dialogue}
                        onChange={(e) => setDialogue(e.target.value)}
                    ></textarea>
                    <br />
                    <button type="button" onClick={summarizeWithPegasus}>Summarize with PEGASUS</button>
                    <button type="button" onClick={summarizeWithBart}>Summarize with BART</button>
                </div>
                <div className="output-area">
                    <div className="model-output">
                        <h3>PEGASUS Summary</h3>
                        {pegasusSummary && <p>{pegasusSummary}</p>}
                        {pegasusError && <p className="error">{pegasusError}</p>}
                    </div>
                    <div className="model-output">
                        <h3>BART Summary</h3>
                        {bartSummary && <p>{bartSummary}</p>}
                        {bartError && <p className="error">{bartError}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
