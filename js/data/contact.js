let contact = {
    phone: '100048',
    address: '北京市良乡高教园区北京工商大学数学与统计学院楼209室',
    description: '<p><span style="font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;">北京工商大学因果推断团队于2022年组建成立，主要从事因果推断的基础理论和相关应用领域的工作。团队负责人为博士生导师耿直教授。</span><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><span style="font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;">团队集中于医学、人工智能行业中的因果性问题，集中解决了若干关键科学问题，科研经费充足。团队学术创新能力突出。近年来，在Biometrika、Artificial Intelligence、J. Machine Learning Research、Biometrics、Statistica Sinica、Statistics in Medicine、TNNLS等国际顶级学术期刊和ICML、NuerIPS、AAAI、SIGKDD 、IJCAI、WWW等国际顶级学术会议发表多篇论文。</span><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><span style="font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;">团队特别关注研究生的培养。一方面，为研究生提供舒适的科研环境，包括一流的硬件设施和丰厚的科研奖励等；另一方面，团队每周会进行一到两次的学术讨论会，解决研究生遇到的科研问题。</span><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><br style="outline: none; margin: 0px; padding: 0px; font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;" /><span style="font-family: \'Microsoft YaHei\', \'PingFang SC\', Helvetica, Tahoma, \'Hiragino Sans GB\', \'Microsoft YaHei\', SimSun, Heiti, sans-serif; font-size: 12px; white-space: pre-wrap; background-color: #ffffff;">团队主要成员有教授2人，其中国家杰青1人，副教授2人，讲师1人，博士后研究员1人, 多名博士和硕士研究生。团队每年招收博士后、博士研究生和硕士研究生若干。</span></p>',
    email: 'btbu_causality@163.com',
}

if ($(".footerEmail")) {
    $(".footerEmail").html(contact.email)
}
if ($(".footerAddress")) {
    $(".footerAddress").html(contact.address)
}
if ($(".footerPhone")) {
    $(".footerPhone").html(contact.phone)
}
if (!contact.phone) {
    $(".footerPhoneWrapper").hide()
}
if ($("#teamDescription")) {
    $("#teamDescription").html(contact.description)
}
