import ProductCategory from '@/app/components/ProductCategory';
import FilterBrand from '@/app/components/filter/FilterBrand';
import FilterRanged from '@/app/components/filter/FilterRanged';
import FilterTags from '@/app/components/filter/FilterTags';
import FilterWeight from '@/app/components/filter/FilterWeight';
import Search from '@/app/components/ui/Search';

const ProductLeftContent = () => {
  // Category menu
  const menu = [
    { title: 'Tất cả', pathName: '#!' },
    { title: 'Đồ cho chó', pathName: '#!' },
    { title: 'Đồ cho mèo', pathName: '#!' },
    { title: 'Chim cảnh', pathName: '#!' },
    { title: 'Cá cảnh', pathName: '#!' },
  ];

  return (
    <div>
      <Search />
      <ProductCategory categoryTitle="Danh mục tin tức" menu={menu} />
      <FilterRanged />
      <FilterBrand />
      <FilterWeight />
      <FilterTags />
    </div>
  );
};

export default ProductLeftContent;
