import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/actions";



const UserInfo = () => {

    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data.eventFiltersInfo);
                dispatch(getUserInfo(response.data.eventFiltersInfo))
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [token]);

    const companyLimit = useSelector(state => state.userInfo.companyLimit)
    const usedCompanyCount = useSelector(state => state.userInfo.usedCompanyCount)

    return (
        <div>
            <div>
                <p>Использовано компаний</p>
                <p>Лимит по компаниям</p>
            </div>
            <div>
                <p>{usedCompanyCount}</p>
                <p>{companyLimit}</p>
            </div>
        </div>
    )
}

export default UserInfo;