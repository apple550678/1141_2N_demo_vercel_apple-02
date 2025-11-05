// clientSupabase.js 檔案內容

import { createClient } from '@supabase/supabase-js'

// 1. 正確讀取環境變數 (您原本的寫法是正確的)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// 2. 🚨 插入檢查點 (這是我們用來診斷 Vercel 問題的關鍵)
if (!supabaseUrl || !supabaseKey) {
  // 如果變數為 undefined 或 null，就拋出錯誤
  throw new Error(
    '❌ Vercel/Vite 致命錯誤：VITE_SUPABASE_URL 或 KEY 未定義！請檢查 Vercel 環境變數設定。'
  )
}

// 3. 正常建立客戶端
export const supabase = createClient(supabaseUrl, supabaseKey)
