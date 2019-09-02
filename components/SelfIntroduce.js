import React from 'react'
import { Card } from '@fusuma/client'

export const SelfIntroduce = () => (
  <Card
    left={
      <img src="https://pbs.twimg.com/profile_images/979597254188126208/Kw_5K41V_400x400.jpg" />
    }
    right={
      <ul class="description">
        <li>なまえ: こいでまさき</li>
        <li>しごと: フロントエンドエンジニア</li>
        <li>すきる: React/TypeScript</li>
        <li>しゅみ: 日本語ラップ・MCバトル鑑賞</li>
      </ul>
    }
  />
)
