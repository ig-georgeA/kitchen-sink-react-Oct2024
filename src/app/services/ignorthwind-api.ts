import { CustomerDto } from '../models/IGNorthwindAPI/customer-dto';
import { CustomerDtoPagedResultDto } from '../models/IGNorthwindAPI/customer-dto-paged-result-dto';
import { EmployeeDto } from '../models/IGNorthwindAPI/employee-dto';
import { FetchApi } from './fetch-api';
import { OrderDetailDto } from '../models/IGNorthwindAPI/order-detail-dto';
import { OrderDto } from '../models/IGNorthwindAPI/order-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto[]>(`${API_ENDPOINT}/Customers`, [], 'GET', undefined, headers);
}

export async function getCustomerDto(id: string = 'ALFKI'): Promise<CustomerDto | undefined> {
  if (!id) {
    return Promise.resolve(undefined);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'GET', undefined, headers);
}

export async function getOrderDtoList(id: string = 'ALFKI'): Promise<OrderDto[]> {
  if (!id) {
    return Promise.resolve([]);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, [], 'GET', undefined, headers);
}

export async function getOrderDetailDtoList(id: number = 10248): Promise<OrderDetailDto[]> {
  if (!id) {
    return Promise.resolve([]);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, [], 'GET', undefined, headers);
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, [], 'GET', undefined, headers);
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
  if (!id) {
    return Promise.resolve(undefined);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'DELETE', undefined, headers);
}

export async function putCustomerDto(data: any): Promise<CustomerDto | undefined> {
  if (!data) {
    return Promise.resolve(undefined);
  }
  const body = JSON.stringify(data);
  const headers = {
    Authorization: 'Bearer <auth_value>',
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'PUT', body, headers);
}

export async function getCustomerDtoPagedResultDto(pageIndex: number, size: number, orderBy: string): Promise<CustomerDtoPagedResultDto | undefined> {
  const query = new URLSearchParams({
    'pageIndex': `${pageIndex}`,
    'size': `${size}`,
    'orderBy': orderBy });
  return await FetchApi.fetchApiResponse<CustomerDtoPagedResultDto | undefined>(`${API_ENDPOINT}/Customers/GetCustomersWithPage?${query}`, undefined);
}
