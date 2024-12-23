-- Active: 1728135645233@@127.0.0.1@3306@tp_music
-- 创建一个test_music 表
CREATE TABLE test_music (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    singer VARCHAR(100) NOT NULL,
    url VARCHAR(100) NOT NULL
);

-- 插入数据
INSERT INTO test_music (name, singer, url) VALUES ('七里香', '周杰伦', 'http://www.baidu.com');
INSERT INTO test_music (name, singer, url) VALUES ('青花瓷', '周杰伦', 'http://www.baidu.com');
INSERT INTO test_music (name, singer, url) VALUES ('稻香', '周杰伦', 'http://www.baidu.com');
INSERT INTO test_music (name, singer, url) VALUES ('夜曲', '周杰伦', 'http://www.baidu.com');