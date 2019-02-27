import React from 'react';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_GB';
const pagination = ({totalPages, currPage, pageLength, onChange, isSearching, onPaginate }) =>(
  <div className="d-flex justify-content-center">
    { isSearching?
      <div className="m-3"><i className="fa fa-spinner fa-spin"></i></div>
      :<Pagination className="mt-3" total={totalPages*pageLength} current={currPage+1} pageSize={pageLength} locale={locale} onChange={onPaginate} />
    }
</div>);
export default pagination;
