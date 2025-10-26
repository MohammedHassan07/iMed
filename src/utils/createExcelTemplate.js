import * as XLSX from 'xlsx';

const CreateExcelTemplate = () => {

    const columns = [

        { id: 'itemCode', label: 'Item Code' },
        { id: 'saltName', label: 'Salt Name' },
        { id: 'brandName', label: 'Brand Name' },
        { id: 'manufacturer', label: 'Manufacturer' },
        { id: 'packageQuantity', label: 'Package Quantity' },
        { id: 'productForm', label: 'Product Form' },
        { id: 'minQuantityAlert', label: 'Min Quantity Alert' },
        { id: 'storageCondition', label: 'Storage Condition' },
        { id: 'boxNumber', label: 'Box Number' },
    ];

    const header = columns.map((col) => col.label);

    const worksheet = XLSX.utils.aoa_to_sheet([header]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Template');

    const excelFile = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'binary',
    });

    const excelBlob = new Blob([s2ab(excelFile)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(excelBlob);
    link.download = 'ItemTemplate.xlsx';
    link.click();
};

const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
};

export default CreateExcelTemplate;
