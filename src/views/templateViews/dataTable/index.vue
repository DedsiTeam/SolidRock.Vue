<template>
  <div class="mb-4 bg-white p-4">
    <a-form>
      <a-row :gutter="16">
        <a-col :span="4">
          <a-form-item label="查询条件">
            <a-input placeholder="请输入查询条件" />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="查询条件">
            <a-select placeholder="请选择查询条件"></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="查询条件">
            <a-date-picker class="w-full" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div class="flex justify-between">
      <a-space>
        <a-button type="primary">创建</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" @click="searchClick">搜索</a-button>
        <a-button @click="resetClick">重置</a-button>
      </a-space>
    </div>
  </div>
  <div class="bg-white">
    <a-table v-bind="tableConfig">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'noIndex'">{{ index + 1 }}</template>

        <template v-if="column.key === 'action'">
          <a-space>
            <a-button type="primary" @click="editButtonClick(record)">编辑</a-button>
            <a-popconfirm
                title="确认删除吗？"
                ok-text="确认"
                cancel-text="取消"
                @confirm="deleteConfirm(record)"
            >
              <a-button type="primary" danger>删除</a-button>
            </a-popconfirm>
            <a-button @click="detailButtonClick(record)">详情</a-button>
          </a-space>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { DataTableConfig } from '@/components/dataTable/public-api.ts';

// 表格配置
const tableConfig = reactive(new DataTableConfig())
tableConfig.addColumns([
  { title: '名字1', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '名字3', dataIndex: 'name', key: 'name' }
])

// 分页事件
async function paginationChange(page: number, pageSize: number) {
  tableConfig.pagination.setLastPageSize(page, pageSize);
  await viewOnInit()
}

// 搜索点击事件
function searchClick() {
  // 重置分页
  tableConfig.pagination.setDefaultPageSize()

  viewOnInit()
}

// 重置点击事件
function resetClick() {
  // 重置分页
  tableConfig.pagination.setDefaultPageSize()

  // 重置表单

  viewOnInit()
}

// 编辑点击事件
function editButtonClick(record: any) {

}

// 删除确认事件
function deleteConfirm(record: any) {

}

// 详情点击事件
function detailButtonClick(record: any) {

}

// 页面加载
async function viewOnInit() {
  tableConfig.pagination.total = 110;
  tableConfig.setDataSource([
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
    { name: '1'},
  ])
}

onMounted(async function () {
  await viewOnInit()
})
</script>

<style scoped>

</style>