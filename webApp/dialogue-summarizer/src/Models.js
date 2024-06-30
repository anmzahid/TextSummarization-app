import React from 'react';
import './Models.css';

function Models() {
    return (
        <div className="models-page">
            <h1>Models</h1>

            <div className="model-card">
                <h2>Pegasus Model</h2>
                <p className="model-heading">Model Summary</p>
                <p>Pegasus is a state-of-the-art abstractive summarization model developed by Google Research. The model is pretrained on a large corpus of news articles and fine-tuned on downstream summarization tasks. Pegasus stands for "Pre-training with Extracted Gap-sentences for Abstractive Summarization." It uses a novel pretraining objective that involves masking entire sentences rather than individual tokens.</p>

                <p className="model-heading">Training Data</p>
                <p>Pegasus was pretrained on the C4 dataset (Colossal Clean Crawled Corpus) and fine-tuned on various summarization datasets such as CNN/DailyMail, XSum, and others.</p>

                <p className="model-heading">Languages</p>
                <p>English</p>

                <p className="model-heading">Model Performance</p>
                <p>Pegasus achieves state-of-the-art results on several benchmark summarization datasets, including CNN/DailyMail and XSum. It generates high-quality, fluent, and coherent summaries.</p>

                <p className="model-heading">Use Cases</p>
                <p>Pegasus is used for abstractive text summarization tasks, including news summarization, document summarization, and more. It can be applied in various domains where concise text generation is required.</p>
            </div>

            <div className="model-card">
                <h2>BART Model</h2>
                <p className="model-heading">Model Summary</p>
                <p>BART is a transformer-based model developed by Facebook AI. It combines bidirectional and autoregressive transformers to achieve strong performance on text generation tasks. BART is pretrained using a denoising autoencoder approach and fine-tuned on downstream tasks such as summarization, translation, and text generation.</p>

                <p className="model-heading">Training Data</p>
                <p>BART was pretrained on a large corpus of text from the internet and fine-tuned on specific datasets like CNN/DailyMail for summarization tasks.</p>

                <p className="model-heading">Languages</p>
                <p>English</p>

                <p className="model-heading">Model Performance</p>
                <p>BART achieves state-of-the-art results on various natural language processing tasks, including summarization, machine translation, and more. It generates high-quality, fluent, and contextually accurate text.</p>

                <p className="model-heading">Use Cases</p>
                <p>BART is used for a wide range of natural language generation tasks, including abstractive summarization, dialogue generation, and text completion. It is versatile and effective in generating coherent and contextually relevant text.</p>
            </div>
        </div>
    );
}

export default Models;
