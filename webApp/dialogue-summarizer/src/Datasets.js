import React from 'react';
import './Datasets.css';

function Datasets() {
    return (
        <div className="datasets-page">
            <h1>Datasets</h1>

            <div className="dataset-card">
                <h2>SAMSum Dataset</h2>
                <p className="dataset-heading">Dataset Summary</p>
                <p>The SAMSum dataset contains about 16k messenger-like conversations with summaries. Conversations were created and written down by linguists fluent in English. Linguists were asked to create conversations similar to those they write on a daily basis, reflecting the proportion of topics of their real-life messenger conversations. The style and register are diversified - conversations could be informal, semi-formal, or formal, they may contain slang words, emoticons, and typos. Then, the conversations were annotated with summaries. It was assumed that summaries should be a concise brief of what people talked about in the conversation in third person. The SAMSum dataset was prepared by Samsung R&D Institute Poland and is distributed for research purposes (non-commercial licence: CC BY-NC-ND 4.0).</p>
                <br></br>
                <p className="dataset-heading">Languages</p>
                <p>English</p>
                <br></br>
                <p className="dataset-heading">Dataset Structure</p>
                <p className="dataset-heading">Data Instances</p>
                <p>The created dataset is made of 16369 conversations distributed uniformly into 4 groups based on the number of utterances in conversations: 3-6, 7-12, 13-18 and 19-30. Each utterance contains the name of the speaker. Most conversations consist of dialogues between two interlocutors (about 75% of all conversations), the rest is between three or more people</p>
                <p>The first instance in the training set: {'{'}'id': '13818513', 'summary': 'Amanda baked cookies and will bring Jerry some tomorrow.', 'dialogue': "Amanda: I baked cookies. Do you want some?\\r\\nJerry: Sure!\\r\\nAmanda: I'll bring you tomorrow :-)"{'}'}</p>
                <br></br>
                <p className="dataset-heading">Data Fields</p>
                <p>dialogue: text of dialogue.<br />
                summary: human written summary of the dialogue.<br />
                id: unique id of an example.</p>
                <br></br>
                <p className="dataset-heading">Data Splits</p>
                <p>train: 14732<br />
                val: 818<br />
                test: 819</p>
                <br></br>
                <p className="dataset-heading">Who are the source language producers?</p>
                <p>linguists</p>
                <br></br>
                <p className="dataset-heading">Who are the annotators?</p>
                <p>language experts</p>
            </div>

            <div className="dataset-card">
                <h2>CNN/DailyMail Dataset</h2>
                <p className="dataset-heading">Dataset Summary</p>
                <p>The CNN / DailyMail Dataset is an English-language dataset containing just over 300k unique news articles as written by journalists at CNN and the Daily Mail. The current version supports both extractive and abstractive summarization, though the original version was created for machine reading and comprehension and abstractive question answering.</p>
                <br></br>
                <p className="dataset-heading">Languages</p>
                <p>The BCP-47 code for English as generally spoken in the United States is en-US and the BCP-47 code for English as generally spoken in the United Kingdom is en-GB. It is unknown if other varieties of English are represented in the data.</p>
                <br></br>
                <p className="dataset-heading">Dataset Structure</p>
                <p className="dataset-heading">Data Instances</p>
                <p>For each instance, there is a string for the article, a string for the highlights, and a string for the id. See the CNN / Daily Mail dataset viewer to explore more examples.</p>
                
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Article</th>
                            <th>Highlights</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0054d6d30dbcad772e20b22771153a2a9cbeaf62</td>
                            <td>(CNN) -- An American woman died aboard a cruise ship that docked at Rio de Janeiro on Tuesday, the same ship on which 86 passengers previously fell ill, according to the state-run Brazilian news agency, Agencia Brasil. The American tourist died aboard the MS Veendam, owned by cruise operator Holland America. Federal Police told Agencia Brasil that forensic doctors were investigating her death. The ship's doctors told police that the woman was elderly and suffered from diabetes and hypertension, according the agency. The other passengers came down with diarrhea prior to her death during an earlier part of the trip, the ship's doctors said. The Veendam left New York 36 days ago for a South America tour.</td>
                            <td>The elderly woman suffered from diabetes and hypertension, ship's doctors say. Previously, 86 passengers had fallen ill on the ship, Agencia Brasil says.</td>
                        </tr>
                    </tbody>
                </table>

                <p className="dataset-heading">Data Fields</p>
                <p>id: a string containing the heximal formatted SHA1 hash of the url where the story was retrieved from<br />
                article: a string containing the body of the news article<br />
                highlights: a string containing the highlight of the article as written by the article author</p>
                <br></br>
                <p className="dataset-heading">Data Splits</p>
                <p>The CNN/DailyMail dataset has 3 splits: train, validation, and test. Below are the statistics for Version 3.0.0 of the dataset.</p>
                
                <p>Dataset Split Number of Instances in Split<br />
                <br></br>
                <b>Train</b>                  : 287,113<br />
                <br></br>
                <b>Validation</b>             : 13,368<br />
                <br></br>
                <b>Test</b>                   : 11,490</p>
                <br></br>
                <p className="dataset-heading">Dataset Creation</p>

                <p className="dataset-heading">Source Data</p>
                <p className="dataset-heading">Initial Data Collection and Normalization</p>
                <p>The data consists of news articles and highlight sentences. In the question answering setting of the data, the articles are used as the context and entities are hidden one at a time in the highlight sentences, producing Cloze style questions where the goal of the model is to correctly guess which entity in the context has been hidden in the highlight. In the summarization setting, the highlight sentences are concatenated to form a summary of the article. The CNN articles were written between April 2007 and April 2015. The Daily Mail articles were written between June 2010 and April 2015.</p>
                <br></br>
                <p className="dataset-heading">Who are the source language producers?</p>
                <p>The text was written by journalists at CNN and the Daily Mail.</p>
                <br></br>
                <p className="dataset-heading">Annotations</p>
                <p>The dataset does not contain any additional annotations.</p>
                <br></br>
                <p className="dataset-heading">Considerations for Using the Data</p>
                <p className="dataset-heading">Social Impact of Dataset</p>
                <p>The purpose of this dataset is to help develop models that can summarize long paragraphs of text in one or two sentences.</p>

                <p>This task is useful for efficiently presenting information given a large quantity of text. It should be made clear that any summarizations produced by models trained on this dataset are reflective of the language used in the articles, but are in fact automatically generated.</p>
            </div>
        </div>
    );
}

export default Datasets;
