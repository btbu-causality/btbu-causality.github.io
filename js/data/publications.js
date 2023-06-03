let publicationList = [
    {"年份": "2022", "成果项": "Peng Wu, Zhiqiang Tan, Wenjie Hu, and Xiao-Hua Zhou (2022), Model-Assisted Inference for Covariate-Specific Treatment Effects with High-dimensional Data. Statistica Sinica. (Online)"},
    {"年份": "2022", "成果项": "Peng Wu#, Shasha Han#, Xingwei Tong, and Runze Li (2022), Propensity score regression for causal inference with treatment heterogeneity. Statistica Sinica. (Online)"},
    {"年份": "2022", "成果项": "Sihao Ding, Peng Wu*, Fuli Feng, Yitong Wang, Xiangnan He, Yong Liao, and Yongdong Zhang (2022), Addressing Unmeasured Confounder for Recommendation with Sensitivity Analysis. Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery & Data Mining. (SIGKDD)"},
    {"年份": "2022", "成果项": "Haoxuan Li, Quanyu Dai, Zhenhua Dong, Xiao-Hua Zhou, and Peng Wu* (2022), Multiple Robust Learning for Recommendation. Proceedings of the 37th AAAI Conference on Artificial Intelligence (AAAI, To Appear)"},
    {"年份": "2022", "成果项": "Peng Wu#, Haoxuan Li#, Yuhao Deng, Wenjie Hu, Quanyu Dai, Zhenhua Dong, Jie Sun, Rui Zhang, and Xiao-Hua Zhou (2022), On the Opportunity of Causal Learning in Recommendation Systems: Foundation, Estimation, Prediction and Challenges. International Joint Conference on Artificial Intelligence. (IJCAI)"},
    {"年份": "2022", "成果项": "Quanyu Dai, Haoxuan Li, Peng Wu*, Zhenhua Dong, Xiao-Hua Zhou*, Rui Zhang, Xiuqiang He, Rui Zhang, and Jie Sun (2022), A Generalized Doubly Robust Learning Framework for Debiasing Post-Click Conversion Rate Prediction. Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery & Data Mining. (SIGKDD)"},
    {"年份": "2022", "成果项": "Yang Zhang, Wenjie Wang, Peng Wu, Fuli Feng, and Xiangnan He (2022), Causal Recommendation: Progresses and Future Directions. Tutorial on WWW."},
    {"年份": "2022", "成果项": "Feng Xie, Biwei Huang, Zhengming Chen, Yangbo He, Zhi Geng, and Kun Zhang. Identification of Linear Non-Gaussian Latent Hierarchical Structure. Thirty-ninth International Conference on Machine Learning (ICML), Baltimore, Maryland USA, 2022."},
    {"年份": "2022", "成果项": "Feng Xie, Yangbo He, Zhi Geng, Zhengming Chen, Ru Hou, and Kun Zhang. Testability of Instrument Validity in Linear non-Gaussian Acyclic Causal Models. Entropy, 2022, 24(4), 512. (JCR Q2, IF 2.524)"},
    {"年份": "2022", "成果项": "Biwei Huang*, Charles Low*, Feng Xie, Clark Glymour, Kun Zhang. Latent Hierarchical Causal Structure Discovery with Rank Constraints. Advances in Neural Information Processing Systems (NeurIPS), 2022."},
    {"年份": "2022", "成果项": "Zhengming. Chen*, Feng Xie*, Jie Qiao*, Zhifeng Hao, Kun Zhang, and Ruichu Cai. Identification of Linear Latent Variable Model with Arbitrary Distribution. Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), Vancouver, CANADA, 2022."},
    {"年份": "2022", "成果项": "Fang, Z. Y., Liu, Y., Geng, Z., Zhu, S. Y. and He, Y. B. (2022) A local method for identifying causal relations under Markov equivalence. To appear in Artificial Intelligence."},
    {"年份": "2022", "成果项": "Wei S, Li G, Zhang Z. An alternative doubly robust estimation in causal inference model. Communications in Mathematics and Statistics. "},
    {"年份": "2022", "成果项": "Wei S, Zhang Z, Li G. Estimation of the average treatment effect on the treated with misclassified binary outcome. Stat, 2022, 11(1): e422.  "},
    {"年份": "2022之前", "成果项": "Li, W., Geng, Z. and Zhou, X. H. (2021) Causal mediation analysis with sure outcomes of random events model. Statistics in Medicine 40, 3975-3989."},
    {"年份": "2022之前", "成果项": "Liu, Y., Fang, Z.Y., He, Y.B., Geng, Z., Liu, C.C. (2020) Local causal network learning for finding pairs of total and direct effect. J. Machine Learning Research, 21, 1-37."},
    {"年份": "2022之前", "成果项": "Geng, Z., Liu, Y., Liu, C. C. and Miao, W. (2019) Evaluation of causal effects and local structure learning of causal networks. Ann. Rev. Statist. & Appl. 6, 103-124."},
    {"年份": "2022之前", "成果项": "Miao, W., Geng, Z, Tchetgen Tchetgen, E. (2018) Identifying causal effects with proxy variables of an unmeasured confounder. Biometrika 105, 987-993."},
    {"年份": "2022之前", "成果项": "Miao, W.Liu, C., Geng, Z. (2018) Statistical approaches for causal inference(in Chinese). 中国科学-数学, 48(12), 1753-1778."},
    {"年份": "2022之前", "成果项": "Shanshan Luo, Wei Li, and Yangbo He (2021) Causal inference with outcomes truncated by death in multiarm studies. Biometrics."},
    {"年份": "2022之前", "成果项": "Peng Wu, Xinyi Xu, Xingwei Tong, Qing Jiang, and Bo Lu (2021), Semi-parametric Estimation for Average Causal Effects using Propensity Score based Spline, Journal of statistical planning and inference. 212, 153-168."},
    {"年份": "2022之前", "成果项": "Peng Wu, Xingwei Tong, Yi Wang, Jiajuan Liang, and Xiao-Hua Zhou (2021), Robust Quasi-Oracle Estimation of Average Causal Effects. Biostatistics & Epidemiology. 6(1), 144-163."},
    {"年份": "2022之前", "成果项": "Na Xu, Peng Wu, Gang Ma, Qirui Hu, Xiuqing Hu, Ronghua Wu, Yunfeng Wang, Hanlie Xu, Lin Chen, and Peng Zhang (2021), In-flight spectral response function retrieval of a multi-spectral radiometer based on the functional data analysis technique. IEEE Transactions on Geoscience and Remote Sensing. 60, 1-10."},
    {"年份": "2022之前", "成果项": "Yi Wang, Peng Wu, Xingwei Tong, and Jianguo Sun (2021), A Weighted Method for the Exclusive Hypotheses Test with Application to Typhoon Data, Canadian Journal of Statistics. 49(4):1258-1272."},
    {"年份": "2022之前", "成果项": "Peng Wu, Baosheng Liang, Yifan Xia, and Xingwei Tong (2020), Predicting Disease Risk by Matching Quantile estimation for Censored Data, Mathematical Biosciences and Engineering. 17(5):4544-4562."},
    {"年份": "2022之前", "成果项": "Peng Wu, Qirui Hu, Xingwei Tong, and Min Wu (2020), Learning Causal Effect Using Machine Learning with Application to China's Typhoon. Acta Mathematicae Applicatae Sinica, English Series. 36(3): 702-713."},
    {"年份": "2022之前", "成果项": "Baosheng Liang, Peng Wu, Xingwei Tong, and Yanping Qiu (2020), Regression and Subgroup Detection for Heterogeneous Samples. Computational Statistics. 35, 1853-1878."},
    {"年份": "2022之前", "成果项": "Wang X L, Wu J P, Yu B J, Dong F, Ma D, Xiao G X, Zhang C, Heavy metals in aquatic products and the health risk assessment to population，Environmental Science and Pollution Research, 2020, 27: 22708–22719. (SCI)"},
    {"年份": "2022之前", "成果项": "Wang X L, Zhang Y F, Zhang H, Li Y, Wei X F, Radio Frequency Signal Identification Learning Based on LSTM， Circuits, Systems, and Signal Processing, doi.10.1007/s00034-020-01417-7, 2020. (SCI)"},
    {"年份": "2022之前", "成果项": "Yu B J, Wang X L*, Dong F, Xiao G X, Ma D， Heavy metal concentrations in aquatic organisms (fishes, shrimp and crabs) and health risk assessment in China, Marine Pollution Bulletin, 2020. (to appear) (SCI)"},
    {"年份": "2022之前", "成果项": "Wang X L, Zhang Y, Geng Z, Liu Y, Guo L X, Xiao G X. Spatial analysis of heavy metals in meat products in China during 2015-2017. Food Control. 2019, 104(1): 174-180. (SCI)"},
    {"年份": "2022之前", "成果项": "Wang X L, Zhang Y F, Zhang H X, Wei X F, Wang G Y. Identification and authentication for wireless transmission security based on RF-DNA fingerprint. EURASIP Journal on Wireless Communications and Networking. 2019, 2019:230. (SCI)"},
    {"年份": "2022之前", "成果项": "Gan H, Zhang H, Khan M S, Wang X L. An improved differential power analysis against random process interrupts. Journal of the Chinese Institute of Engineers, 2019, 42(2):127-131. (SCI)"},
    {"年份": "2022之前", "成果项": "Li Q, Zhang H X, Zheng T Y, Wang X L. Maximum inner product method for extracting the path-loss parameters in primary transformer substations. China Communications. 2019, 16(4): 120-129. (SCI)"},
    {"年份": "2022之前", "成果项": "Wang X L, Zhang Y F, Zhang X, Wang W B. Traffic Prediction for Wireless Cellular System Based on Shrinkage Estimation., 2019 2nd International Conference on Safety Produce Information (IICSPI). 2019, 108-113. ( EI)"},
    {"年份": "2022之前", "成果项": "Feng Xie*, Ruichu Cai*, Biwei Huang, Clark Glymour, Zhifeng Hao, and Kun Zhang*. Generalized Independent Noise Condition for Estimating Latent Variable Causal Graphs. Advances in Neural Information Processing Systems 33 (NeurIPS), Virtual Conference, 2020. (Spotlight)"},
    {"年份": "2022之前", "成果项": "Feng Xie, Ruichu Cai, Yan Zeng, and Zhifeng Hao. An Efficient Entropy-Based Causal Discovery Method for Linear Structural Equation Models with IID Noise Variables. IEEE Transactions on Neural Networks and Learning Systems (T-NNLS), 2020, 31(5): 1667-1680. (JCR Q1, IF 11.683)"},
    {"年份": "2022之前", "成果项": "Ruichu Cai*, Feng Xie*, Clark Glymour, Zhifeng Hao, and Kun Zhang. Triad Constraints for Causal Discovery in the Presence of Latent Variables. Advances in Neural Information Processing Systems 32 (NeurIPS), Vancouver, CANADA, 2019."}
];
// for (let i = 0; i < 20; i++) {
//     publicationList.push({
//         id: i,
//         '年份':  i < 10 ? '2022' : '2021',
//         '成果项': '2022年10月，汤家豪院士正式续聘“清华大学杰出访问教授”，这是汤先生自2019年10月',
//     })
// }

let publicationGroupList = []

for (let i = 0; i < publicationList.length; i++) {
    let matchIndex = -1;
    for (let j = 0; j < publicationGroupList.length; j++) {
        if (publicationGroupList[j]['年份'] == publicationList[i]['年份']) {
            matchIndex = j;
        }
    }
    if (matchIndex == -1) {
        publicationGroupList.push({
            '年份': publicationList[i]['年份'],
            list: [publicationList[i]]
        })
    } else {
        publicationGroupList[matchIndex].list.push(publicationList[i])
    }
}