// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: '迪拉熊Bot',
            logo: {
                src: './public/favicon.png',
            },
            favicon: '/favicon.png',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            social: [{ icon: 'codeberg', label: 'Codeberg', href: 'https://codeberg.org/ProjectKuma' }],
            editLink: {
                baseUrl: 'https://codeberg.org/ProjectKuma/website/_edit/main',
            },
            lastUpdated: true,
            plugins: [
                lucode({
                    footerText: "迪拉熊Bot团队呈现 [Starlight](https://starlight.astro.build/)提供支持 本站内容采用[署名—相同方式共享 4.0 协议国际版](https://creativecommons.org/licenses/by-sa/4.0/)授权 本项目与华立科技及世嘉飞舞无关",
                }),
            ],
            customCss: [
                '@fontsource-variable/noto-sans-sc/wght.css',
                './src/styles/custom.css',
            ],
            sidebar: [
                {
                    label: '用户指南',
                    items: [
                        {
                            label: '快速开始',
                            items: [
                                { label: '基础', link: '/user-guide/basic/' },
                                { label: '问题反馈', link: '/user-guide/issue/' },
                            ],
                        },
                        {
                            label: '功能介绍',
                            items: [
                                { label: 'RP对话', link: '/user-guide/llm/' },
                                { label: '排卡', link: '/user-guide/queue/' },
                                { label: '开字母', link: '/user-guide/wordle/' },
                            ],
                        },
                        {
                            label: '额外信息',
                            items: [
                                { label: '收藏品列表', link: '/user-guide/collections/' },
                            ],
                        },
                    ],
                },
                {
                    label: '指令大全',
                    items: [
                        {
                            label: '通用功能',
                            items: [{ autogenerate: { directory: 'commands/common' } }],
                        },
                        {
                            label: '特色功能',
                            items: [{ autogenerate: { directory: 'commands/interaction' } }],
                        },
                        {
                            label: '游戏相关',
                            items: [{ autogenerate: { directory: 'commands/maimai' } }],
                        },
                        {
                            label: '查分器相关',
                            items: [{ autogenerate: { directory: 'commands/prober' } }],
                        },
                    ],
                },
                {
                    label: '更新日志',
                    items: [
                        {
                            label: 'Bot前端',
                            items: [
                                { label: '普通版', link: '/changelog/ob11/' },
                                { label: '官B版', link: '/changelog/qq/' },
                            ],
                        },
                        {
                            label: '后端服务',
                            items: [
                                { label: '绘图服务（酸橙熊熊）', link: '/changelog/limekuma/' },
                                { label: '查分器服务（柠檬熊熊）', link: '/changelog/prober/' },
                            ],
                        },
                    ],
                },
                {
                    label: '贡献指南',
                    items: [
                        {
                            label: 'Bot前端',
                            items: [
                                { label: '简介', link: '/collaborator-guide/bot-intro/' },
                                { label: 'Nonebot 2', link: '/collaborator-guide/nonebot2/' },
                            ],
                        },
                        {
                            label: '绘图后端',
                            items: [
                                { label: '简介', link: '/collaborator-guide/drawer-intro/' },
                            ],
                        },
                        {
                            label: '查分器',
                            items: [
                                { label: '落雪', link: '/collaborator-guide/lxns/' },
                                { label: '水鱼', link: '/collaborator-guide/diving-fish/' },
                            ],
                        },
                    ],
                },
                { label: '成员名单', link: '/credits/' },
            ],
            credits: true,
        }),
    ],
});
